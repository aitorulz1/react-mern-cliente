import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext'

import Proyecto from './Proyecto'

const ListadoProyectos = () => {

    // Obtener el state del formulario y Destructuring de formulario desde Context
    const proyectosContext = useContext(proyectoContext); 
    const { proyectos } = proyectosContext;

    return ( 
        <ul className="Listado-proyectos">
            {proyectos.map(proyecto => (
                <Proyecto
                    key={proyecto.id} 
                    proyecto={proyecto}
                />
            ))}
        </ul>
     );
}
 
export default ListadoProyectos;