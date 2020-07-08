import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios'

// import uuid from 'uuid';

import proyectoContext from './proyectoContext'
import proyectoReducer from './proyectoReducer'
import {  
    FORMULARIO_PROYECTO, 
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO 
} from '../../types'


const ProyectoState = props => {

    const proyectos = [
        { id: 1, nombre: 'Tienda Virtual'},
        { id: 2, nombre: 'Intranet'},
        { id: 3, nombre: 'Diseño de sitio web'},
        { id: 4 , nombre: 'MERN'}
    ]

    const initialState = {  
        proyectos: [],   
        formulario: false, // Cuando cambie a true, se mostrará  presionando el boton de nuevo proyecto, el input y el boton de agrega proyecto. Se corresponde l component NuevoProyecto 
        errorformulario: false,
        proyecto: null
    }

    // Dispatch para ejecutar las acciones

    const  [ state, dispatch ] = useReducer( proyectoReducer, initialState);


    // Funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    // Obtener los proyectos
    const obtenerProyectos = async () => {
        try {
            const resultado = await clienteAxios.get('/api/proyectos');
            dispatch({
                type: OBTENER_PROYECTOS,
                payload: resultado.data.proyectos
            })
        } catch (error) {
            
        }


    }

    // Agregar Nuevo Proyectos
    const agregarProyecto = async proyecto => {
        // proyecto.id = uuid.v4();

        try {
            const resultado = await clienteAxios.post('/api/proyectos', proyecto);
            console.log(resultado);
                    // Inserta el proyecto en el state una vez tengamos el id
            dispatch({
                type: AGREGAR_PROYECTO,
                payload: proyecto
            })
        } catch (error) {
            console.log(error.response);

        }


    }

    // Validar Formulario
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    // Seleecionamos el proyecto que el usuario ha hecho click. Trae de proyecto el valor de un proyecto.id, Ej: 3. La función va filtrar el proyecto.id q sea igal al q le pase la función.
    const proyectoActual = proyectoId => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }

    // Eliminar proyecto onclick
    const eliminarProyecto = async proyectoId => {
        try {
            await clienteAxios.delete(`/api/proyectos/${proyectoId}`)
            dispatch({
                type: ELIMINAR_PROYECTO,
                payload: proyectoId
            })
        } catch (error) {
            
        }

    }


    return(
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                proyecto: state.proyecto,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;