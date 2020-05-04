import React, { useReducer } from 'react';

// import uuid from 'uuid';

import proyectoContext from './proyectoContext'
import proyectoReducer from './proyectoReducer'
import {  
    FORMULARIO_PROYECTO, 
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO 
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
        errorformulario: false

    }

    // Dispatch para ejecutar las acciones

    const  [ state, dispatch ] = useReducer( proyectoReducer, initialState)


    // Funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    // Obtener los proyectos
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }

    // Agregar Nuevo Proyectos
    const agregarProyecto = proyecto => {
        // proyecto.id = uuid.v4();

        // Inserta el proyecto en el state una vez tengamos el id
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
        })
    }

    // Validar Formulario
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }


    return(
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorformulario: state. errorformulario,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;