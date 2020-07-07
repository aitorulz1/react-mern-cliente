import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/auth/authContext';

const Login = (props) => {


    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;


    const authContext = useContext(AuthContext);
    const { mensaje, autenticado, iniciarSesion } = authContext;


    const [ usuario, guardarUsuario ] = useState({
        email: '',
        password: ''
    });

    const { email, password } = usuario;

    // En caso de que el usuario o password no exista
    useEffect(() => {
        if(autenticado){
            props.history.push('/proyectos')
        }

        if(mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
    }, [mensaje, autenticado, props.history])

    
    // onChange

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [ e.target.name ] : e.target.value
        });
    }

    
    // onSubmit

    const onSubmit = e => {
        e.preventDefault();
    

    // Validar que no haya campos vacíos
    if(email.trim() === '' || password.trim() === ''){
        mostrarAlerta('Todos los campos son obligatorios', 'alerta-error')
    }

    // Pasarlo al action
    iniciarSesion({
        email,
        password
    })

}



    return ( 
        
        <div className="form-usuario">
            <div className="contenedor-form sombre-dark">

                <h1>Inicias Sesión</h1>

        { alerta ? (<div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div> ) : null }

                <form
                
                    onSubmit= {onSubmit }
                
                >
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
                        
                        <input
                            type='submit'
                            value='Iniciar Sesión'
                            className='btn btn-primario btn-block'
                        />
                    </div>
                </form>

                <Link to={'/nueva-cuenta'} className='enlace-cuenta'>Registrarse</Link>
            </div>
        </div>

     );
}
 
export default Login;