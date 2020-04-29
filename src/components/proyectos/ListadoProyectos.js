import React from 'react';

import Proyecto from './Proyecto'

const ListadoProyectos = () => {

    const proyectos = [
        { id: '01', nombre: 'proyecto 01' },
        { id: '02', nombre: 'proyecto 02' },
        { id: '03', nombre: 'proyecto 03' },
        { id: '04', nombre: 'proyecto 04' },
    ]

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