import React, { Fragment, useState } from 'react';


const NuevoProyecto = () => {


    // state del Form de Nuevo Proyecto 
    const [ proyecto, guardarProyecto] = useState({
        nombre:''
    });

    const { nombre } = proyecto;

    const [ error, guardarError ] = useState(false);

    // onChange

    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }

    // onSubmit

    const onSubmitProyecto = e => {
        e.preventDefault();

        if(nombre.trim() === ''){
            guardarError(true);
            return;          
        }
    }

    return ( 
            
        <Fragment>

            <button
                type='button'
                className='btn btn-block btn-primario'
                onClick={onSubmitProyecto}
            >Nuevo Proyecto</button>

            {error ? <p>Insertar Nombre para Crear</p> : null}

            <form
                className='formulario-nuevo-proyecto'
                onSubmit = ''
            >

            <input
                type='text'
                className='input-text'
                placeholder='Nombre del Proyecto...'
                name= 'nombre'
                value={nombre}
                Proyecto={onChangeProyecto}
            />

            <input
                type= 'submit'
                className='btn btn-block btn-primario'
                value='Agregar Proyecto'
            />

            </form>

        </Fragment>    
     );
}
 
export default NuevoProyecto;