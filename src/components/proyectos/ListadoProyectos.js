import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';

import proyectoContext from '../../context/proyectos/proyectoContext'

const ListadoProyectos = () => {

    // Extraer proyectos de state inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyectos, obtenerProyectos } = proyectosContext;

    // Antes de que cargue la página Obtener poryectos cuando cargue el componente
    useEffect(() => {
        obtenerProyectos();
    }, []);

    // Revisar si proyectos tiene contenidos
    if(proyectos.length === 0) return null;

    

    return ( 
        <ul className="Listado-proyectos">
            {proyectos.map(proyecto => (
                <Proyecto 
                    key={proyecto._id} 
                    proyecto={proyecto}
                />
            ))}
        </ul>
     );
}
 
export default ListadoProyectos;