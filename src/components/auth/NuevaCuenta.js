import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/auth/authContext';

const NuevaCuenta = (props) => {

    //extraer los valores del alertaContext
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta} = alertaContext;

    //extraer los valores del authContext
    const authContext = useContext(AuthContext);
    const { mensaje, autenticado, registrarUsuario } = authContext;

    // En caso de que el usuario se haya autenticado o registrado o sea un registro duplicado
    useEffect(() => {
        if(autenticado){
            props.history.push('/proyectos')
        }

        if(mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
    }, [mensaje, autenticado, props.history])

    const [ usuario, guardarUsuario ] = useState({
        nombre:'',
        email: '',
        password:'',
        confirmar:''
    })

    const { nombre, email, password, confirmar } = usuario;

    const [ error, guardarError] = useState(false)


    // onChange

    const onChange= e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        });
    }


    //onSubmit

    const onSubmit = e => {
        e.preventDefault();

        // Campos vacíos
        if( nombre.trim() === '' || email.trim() === '' || password.trim() === '' || confirmar.trim() === ''){
           mostrarAlerta('Todos los campos son obligatorios', 'alerta-error'); // msg y categoria. Ver consola components
            return;
        }

        // Min 6 caracteres. Esto lo indicamos en routes de servidor, en los check
        if(password.length < 6){
            mostrarAlerta('El password debe de ser al menos de 6 caracteres', 'alerta-error'); 
            return;
        }

        // Los 3 passwords son iguales
        if(password !== confirmar){
            mostrarAlerta('Los password no son iguales', 'alerta-error'); 
            return;            
        }

        // Pasarlo al action
        registrarUsuario({
            nombre, 
            email, 
            password
        });

    }

    return ( 
        <div className="form-usuario">

    { alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null }

            <div className="contenedor-form sombre-dark">

                <h1>Inicias Sesión</h1>

                {error ? <p>Debes de rellenar los campos</p> : null }

                <form
                
                    onSubmit= {onSubmit }
                
                >
                    <div className="campo-form">
                        <label htmlFor="email">Nombre</label>
                        <input
                            type='text'
                            id='nombre'
                            name='nombre'
                            value={nombre}
                            placeholder='Tu nombre'
                            onChange= { onChange }
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={email}
                            placeholder='Tu email'
                            onChange= { onChange }
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            value={password}
                            placeholder='Tu password'
                            onChange= { onChange }
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar Password</label>
                        <input
                            type='password'
                            id='confirmar'
                            name='confirmar'
                            value={confirmar}
                            placeholder='Confirma password'
                            onChange= { onChange }
                        />
                    </div>
                    <div className="campo-form">
                        
                        <input
                            type='submit'
                            value='Registrarme'
                            className='btn btn-primario btn-block'
                        />
                    </div>
                </form>

                <Link to={'/'} className='enlace-cuenta'>Login</Link>
            </div>
        </div>
     );
}
 
export default NuevaCuenta;