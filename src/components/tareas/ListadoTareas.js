import React, { Fragment, useContext } from 'react';
import Tarea from './Tarea'

import proyectoContext from '../../context/proyectos/proyectoContext';




const  ListadoTareas = () => {
    
     // Obtener el state de proyectos
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    // Si no hay proyecto seleccionado
    if(!proyecto) return <h1>Selecciona un Proyecto</h1>;

    //Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    const tareasProyecto = [
        { nombre: 'Elegir Plataforma', estado: true },
        { nombre: 'Elegir Colores', estado: false },
        { nombre: 'Elegir Plataforma', estado: false },
        { nombre: 'Elegir Hosting', estado: true },
    ]

    return ( 
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
                <ul className='listado-tareas'>
                    {tareasProyecto.length === 0
                    ?
                    null
                    :
                    tareasProyecto.map(tarea => (
                        <Tarea                            
                            tarea = {tarea}
                        />
                    ))
                    }
                </ul>
        </Fragment>
     );
}
 
export default  ListadoTareas;