import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext'

const NuevoProyecto = () => {

    // Obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const { formulario, errorformulario, mostrarFormulario, agregarProyecto, mostrarError } = proyectosContext;


    // state para proyecto
    const [ proyecto, guardarProyecto ] = useState({
        nomre: ''
    });

    const { nombre } = proyecto;

    

    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }

    const onSubmitProyecto = e => {
        e.preventDefault();

        if(nombre === ''){  
            mostrarError();          
            return;
        }

        agregarProyecto(proyecto);
        guardarProyecto({
            nombre: ''
        });
    }

    // Mostrar Formulario

    const onClickFormulario = () => {
        mostrarFormulario();
    }

    return (  
        <Fragment>
            <button
                type='button'
                className='btn btn-block btn-primario'
                onClick={onClickFormulario}
            >Nuevo Proyecto</button>

            { formulario ?
            (
                <form
                className='formulario-nuevo-proyecto'
                onSubmit = {onSubmitProyecto}
            >
                <input
                    type='text'
                    className='input-text'
                    name= 'nombre'
                    placeholder='Nombre Proyecto'
                    value={nombre}
                    onChange= {onChangeProyecto}
                />

            <input
                type='submit'
                className='btn btn-block btn-primario'
                value='Agregar Proyecto'
            />
    

            </form>

            
            )  
            
            : null
        }

        {errorformulario ? <p className="mensaje error">Debes de completar el campo</p> : null}

          
        </Fragment>
    );
}
 
export default NuevoProyecto;