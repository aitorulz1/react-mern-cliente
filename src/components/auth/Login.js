import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Login = () => {


    const [ usuario, guardarUsuario ] = useState({
        email: '',
        password: ''
    });

    const { email, password } = usuario;

    const [ error, guardarError ] = useState(false);

    
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
    }


    return ( 
        
        <div className="form-usuario">
            <div className="contenedor-form sombre-dark">

                <h1>Inicias Sesión</h1>

                {error ? <p>Debes de rellenar ambos campos</p> : null}

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