import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';


import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/token'


import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION
} from '../../types';


const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje: null,
        cargando: true
    }

    const [ state, dispatch ] = useReducer(AuthReducer, initialState);


    // La funciones

    const registrarUsuario = async datos => {
        try {
            const respuesta = await clienteAxios.post('/api/usuarios', datos);
            console.log(respuesta.data); // devuelve el token

            dispatch({
                type: REGISTRO_EXITOSO,
                payload: respuesta.data  
            })
            usuarioAutenticado();
        } catch (error) { // Con response accedo al json al axios y data.msg accede al mensaje de error. Ves que debes insertarlo con error.response
            // console.log(error.response.data.msg);
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }

            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            })
        }
    }


    // Devuleve el usuario autenticado
    const usuarioAutenticado = async() => {
        const token = localStorage.getItem('token');
        if(token) {
            //TODO: Funcinción para enviar el token por headers
            tokenAuth(token)
        }

        try {
            const respuesta = await clienteAxios.get('/api/auth');
            console.log(respuesta.data);
            dispatch({
                type: OBTENER_USUARIO,
                payload: respuesta.data.usuario
            })   
        } catch (error) {
            console.log(error.response);
            dispatch({
                type: LOGIN_ERROR
            })
            
        }
    }


    // Cuando el usuario Inicia Sesión
    const iniciarSesion = async datos => {
        try {
            const respuesta = await clienteAxios.post('/api/auth', datos);
            console.log(respuesta);
            dispatch({
                type: LOGIN_EXITOSO,
                payload: respuesta.data
            })
            usuarioAutenticado();
        } catch (error) {
            console.log(error.response.data.msg);
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }
            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
            })
            
        }
    }



    // Cerra Sesion
    const cerrarSesion = () => {
        dispatch({
            type: CERRAR_SESION
        })
    }


    return(
        <AuthContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                catgando: state.catgando,
                registrarUsuario,
                iniciarSesion,
                usuarioAutenticado,
                cerrarSesion 
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;