import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';

import proyectoContext from '../../context/proyectos/proyectoContext'

import AlertaContext from '../../context/alertas/alertaContext'

const ListadoProyectos = () => {

    // Extraer proyectos de state inicial
    const proyectosContext = useContext(proyectoContext);
    const { mensaje, proyectos, obtenerProyectos } = proyectosContext;

    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    // Antes de que cargue la página Obtener poryectos cuando cargue el componente
    useEffect(() => {

        if(mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria)
        }
        obtenerProyectos();
    }, [mensaje]);

    // Revisar si proyectos tiene contenidos
    if(proyectos.length === 0) return null;

    

    return ( 
        <ul className="Listado-proyectos">

    { alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null }

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