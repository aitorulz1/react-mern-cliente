import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const NuevaCuenta = () => {

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
        if(email.trim() === '' || password.trim() === ''){
            guardarError(true);
            return;
        }

        // Min 6 caracteres
        if(password.length < 6){
            guardarError(true);
            return;
        }

        // Los 3 passwords son iguales
        if(password !== confirmar){
            guardarError(true);
            return;            
        }

        // Pasarlo al action

    }

    return ( 
        <div className="form-usuario">
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