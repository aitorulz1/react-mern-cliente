import React, { useContext } from 'react';

import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext'

const Tarea = ({tarea}) => {

    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    const [ proyectoActual ] = proyecto;

    const tareasContext = useContext(tareaContext);
    const { eliminarTarea, obtenerTareas, cambiarEstadoTarea, guardarTareaActual } = tareasContext;

    const tareaEliminar = id => {
        // Se elimina el id que le paso de la tarea que selecciono y que coincide con el id del listado de tarea del state
        eliminarTarea(id);
        // Una vez se elimina, traigo de nuevo todos las tareas que corresponden con el id del proyecto en las que están (que selecciono)
        obtenerTareas( proyectoActual.id);
    }

    const cambiarEstado = tarea => {
        if(tarea.estado){
            tarea.estado = false;
        } else {
            tarea.estado = true;
        }
        cambiarEstadoTarea(tarea);
    }

    const seleccionarTarea = tarea => {
        guardarTareaActual(tarea)
    }


    return ( 
        <li className='tarea sombra'>
            <p>{tarea.nombre}</p>

            <div className='estado'>
                {tarea.estado
                ?
                (
                    <button
                        type='button'
                        className='completo'
                        onClick= {() => cambiarEstado(tarea)}
                    >Completo</button>
                )
                :
                (
                    <button
                        type='button'
                        className='incompleto'
                        onClick= {() => cambiarEstado(tarea)}
                    >Incompleto</button>
                )
                }
            </div>

            <div className='acciones'>
                <button
                    type='button'
                    className='btn btn-primario'
                    onClick = {() => seleccionarTarea(tarea)}

                >
                    Editar
                </button>

                <button
                    type='button'
                    className='btn btn-secundario'
                    onClick= { () => tareaEliminar(tarea.id) }
                >
                    Eliminar
                </button>
            </div>
        </li>
     );
}
 
export default Tarea;