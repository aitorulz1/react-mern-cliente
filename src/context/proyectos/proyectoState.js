import React, { useReducer } from 'react';

import proyectoContext from './proyectoContext'
import proyectoReducer from './proyectoReducer'
import {  FORMULARIO_PROYECTO } from '../../types'


const ProyectoState = props => {

    const initialState = {
        proyectos : [
            { id: '01', nombre: 'proyecto 01' },
            { id: '02', nombre: 'proyecto 02' },
            { id: '03', nombre: 'proyecto 03' },
            { id: '04', nombre: 'proyecto 04' },
        ],
        formulario: false // Cuando cambie a true, se mostrará  presionando el boton de nuevo proyecto, el input y el boton de agrega proyecto. Se corresponde l component NuevoProyecto 

    }

    // Dispatch para ejecutar las acciones

    const  [ state, dispatch ] = useReducer( proyectoReducer, initialState)


    // Funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }


    return(
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                mostrarFormulario
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;