import React, { useReducer } from 'react';

import tareaReducer from './tareaReducer';
import tareaContext from './tareaContext';

import  { TAREAS_PROYECTO } from '../../types';

const TareaState = props => {


    const initialState = {
        tareas: [
            { nombre: 'Elegir Plataforma', estado: true, proyectoId: 1  },
            { nombre: 'Elegir Colores', estado: false, proyectoId: 2  },
            { nombre: 'Elegir Plataforma', estado: false, proyectoId: 3  },
            { nombre: 'Elegir Hosting', estado: true, proyectoId: 4  },
            { nombre: 'Elegir Plataforma', estado: true, proyectoId: 1  },
            { nombre: 'Elegir Colores', estado: false, proyectoId: 2  },
            { nombre: 'Elegir Plataforma', estado: false, proyectoId: 3  },
            { nombre: 'Elegir Plataforma', estado: true, proyectoId: 4  },
            { nombre: 'Elegir Colores', estado: false, proyectoId: 1  },
            { nombre: 'Elegir Plataforma', estado: false, proyectoId: 2  },
            { nombre: 'Elegir Plataforma', estado: true, proyectoId: 3  },
            { nombre: 'Elegir Colores', estado: false, proyectoId: 4  },
            { nombre: 'Elegir Plataforma', estado: false, proyectoId: 1  },
            { nombre: 'Elegir Plataforma', estado: false, proyectoId: 3  },
        ],
        tareasproyecto: null
    }
     
    // Dispatch para ejecutar las acciones

     const  [ state, dispatch ] = useReducer( tareaReducer, initialState);

    // Crear las funciones
    
     // Obtener las tareas de un proyecto
     const obtenerTareas = proyectoId => {
         dispatch({
            type: TAREAS_PROYECTO,
            payload:  proyectoId
         })
         
     }

    return(
        <tareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                obtenerTareas
            }}
        >
            {props.children}
        </tareaContext.Provider>
    )
}

export default TareaState;