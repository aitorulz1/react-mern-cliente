import React, { useContext, useState } from 'react';

import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';
import { AGREGAR_TAREA } from '../../types';

const FormTarea = () => {


         // Obtener el state de proyectos y tareas
         const proyectosContext = useContext(proyectoContext);
         const { proyecto } = proyectosContext;

         const tareasContext = useContext(tareaContext);
         const { agregarTarea, errortarea, obtenerTareas, validarTarea } = tareasContext;


         // creo la const tarea

         const [ tarea, guardarTarea ] = useState({
             nombre:''             
         });

         const { nombre } = tarea;


         // Si no hay proyecto seleccionado
         if(!proyecto) return null;


         //Array destructuring para extraer el proyecto actual. Esto recoge toda la info de proyecto.
         const [ proyectoActual ] = proyecto; 
        
        // onChange
        const onChange = e => {
            guardarTarea({
                ...tarea,
                [e.target.name] : e.target.value
            })
        }
        
        //onSubmit
        const onSubmit = e => {
            e.preventDefault();


            // Validar
            if( nombre.trim() === '') {
                validarTarea();
                return;
            }

            // Pasar la validación
            // validarTarea(false) es correctísimo, pero puedo cambiarlo en reducer a alse una vez haya agregado tarea


            // Agregar la nueva tarea al state de tareas
            tarea.proyectoId = proyectoActual.id;
            tarea.estado = false;
            agregarTarea(tarea);

            
            // Pintar ahora las tareas que había + la nueva
            obtenerTareas(proyectoActual.id)


            // Reiniciar el form
            guardarTarea({
                nombre: ''
            });

        }

    return ( 
        <div className="formulario">

                <form
                    onSubmit={onSubmit}
                >

                    <div className='contenedor-input'>
                        <input 
                            type='text'
                            className='input-text'
                            placeholder='Nombre Tarea...'
                            name='nombre'
                            value= {nombre}
                            onChange= {onChange}
                        />
                    </div>

                    <div className='contenedor-input'>
                        <input 
                            type='submit'
                            className='btn btn-primario btn-submit btn-block'
                            value='Agregar Tarea'
                        />
                    </div>

                </form>

                {errortarea ? <p className='mensaje error'>Debes de Agregar un Nombre</p> : null}                
                
        </div>
     );
}
 
export default FormTarea;