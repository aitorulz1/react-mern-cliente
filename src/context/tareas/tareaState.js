import React, { useReducer } from 'react';

import tareaReducer from './tareaReducer';
import tareaContext from './tareaContext';

import  { 
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA 
 } from '../../types';

const TareaState = props => {


    const initialState = {
        tareas: [
            { id: 1, nombre: 'Elegir Plataforma', estado: true, proyectoId: 1  },
            { id: 2, nombre: 'Elegir Colores', estado: false, proyectoId: 2  },
            { id: 3, nombre: 'Elegir Plataforma', estado: false, proyectoId: 3  },
            { id: 4, nombre: 'Elegir Hosting', estado: true, proyectoId: 4  },
            { id: 5, nombre: 'Elegir Plataforma', estado: true, proyectoId: 1  },
            { id: 6, nombre: 'Elegir Colores', estado: false, proyectoId: 2  },
            { id: 7, nombre: 'Elegir Plataforma', estado: false, proyectoId: 3  },
            { id: 8, nombre: 'Elegir Plataforma', estado: true, proyectoId: 4  },
            { id: 9, nombre: 'Elegir Colores', estado: false, proyectoId: 1  },
            { id: 10, nombre: 'Elegir Plataforma', estado: false, proyectoId: 2  },
            { id: 11, nombre: 'Elegir Plataforma', estado: true, proyectoId: 3  },
            { id: 12, nombre: 'Elegir Colores', estado: false, proyectoId: 4  },
            { id: 13, nombre: 'Elegir Plataforma', estado: false, proyectoId: 1  },
            { id: 14, nombre: 'Elegir Plataforma', estado: false, proyectoId: 3  },
        ],
        tareasproyecto: null,
        errortarea: null,
        tareaseleccionada: null
    }
     
    // Dispatch para ejecutar las acciones

     const  [ state, dispatch ] = useReducer( tareaReducer, initialState);

    // Crear las funciones
    
     // Obtener las tareas de un proyecto por su ID
     const obtenerTareas = proyectoId => {
         dispatch({
            type: TAREAS_PROYECTO,
            payload:  proyectoId
         })
         
     }

    // Obtiene la nueva tarea que insertas en el form de Tarea
     const agregarTarea = tarea => {
         dispatch({
             type: AGREGAR_TAREA,
             payload: tarea
         })
     }

    // Valida y muestra un error en caso de ser necesario
     const validarTarea = () => {
         dispatch({
             type: VALIDAR_TAREA
         })
     }

     // Eliminar tarea por su id
     const eliminarTarea = tareaId => {
         dispatch({
             type: ELIMINAR_TAREA,  
             payload: tareaId
         })
     }

     // Cambiar el estado de cada tarea
     const cambiarEstadoTarea = tarea => {
         dispatch({
             type: ESTADO_TAREA,
             payload: tarea
         })
     }

     // Extrae una tarea para edicion
     const guardarTareaActual = tarea => {
         dispatch({
             type: TAREA_ACTUAL ,
             payload: tarea
         })
     }

     // Edita y modifica una tarea
     const actualizarTarea = tarea => {
         dispatch({
             type: ACTUALIZAR_TAREA,
             payload: tarea
         })
     }

    return(
        <tareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea
            }}
        >
            {props.children}
        </tareaContext.Provider>
    )
}

export default TareaState;