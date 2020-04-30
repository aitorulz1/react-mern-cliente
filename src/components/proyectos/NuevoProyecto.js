import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext'


const NuevoProyecto = () => {

    // Obtener el state del formulario y Destructuring de formulario desde Context
    const proyectosContext = useContext(proyectoContext); 
    const { formulario, mostrarFormulario } = proyectosContext;


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

    // Mostrar el formulario
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

            {/* {error ? <p>Insertar Nombre para Crear</p> : null} */}

            { formulario ?
                (
                    <form
                        className='formulario-nuevo-proyecto'
                        onSubmit = {onSubmitProyecto}
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

                )
                :
                null
             }

            

        </Fragment>    
     );
}
 
export default NuevoProyecto;