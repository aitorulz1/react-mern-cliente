import React, { Fragment, useContext } from 'react';
import Tarea from './Tarea'

import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext'




const  ListadoTareas = () => {
    
     // Obtener el state de proyectos y tareas
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    const tareasContext = useContext(tareaContext);
    const { tareasproyecto, agregarTareas } = tareasContext;

    // Si no hay proyecto seleccionado
    if(!proyecto) return <h1>Selecciona un Proyecto</h1>;

    //Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;



    // ELimina el proyecto
    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual.id);
    }

    return ( 
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
                <ul className='listado-tareas'>
                    {tareasproyecto.length === 0
                    ?
                    null
                    :
                    tareasproyecto.map(tarea => (
                        <Tarea                            
                            tarea = {tarea}
                        />
                    ))
                    }
                </ul>

                <button
                    type='button'
                    className="btn btn-eliminar"
                    onClick= {onClickEliminar}
                >Eliminar Proyecto &times;</button>
        </Fragment>
     );
}
 
export default  ListadoTareas;