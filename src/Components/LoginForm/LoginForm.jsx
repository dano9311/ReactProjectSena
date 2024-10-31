import React from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate(); // Hook para la navegación

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevenir la recarga de la página

    // Agregar lógica de autenticación

    // Redirigir a la pantalla principal (AreaTrabajo)
    navigate('/area-trabajo');
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}> {/* Manejador del evento de envío */}
        <h1>Login</h1>
        <div className='input-box'>
          <input type='text' placeholder='Username' required />
          <FaUser className='icon' />
        </div>
        <div className='input-box'>
          <input type='password' placeholder='Password' required />
          <FaLock className='icon' />
        </div>

        <div className='remember-forgot'>
          <label><input type='checkbox' />Recuérdame</label>
          <a href='#'>Olvidé mi contraseña</a>
        </div>

        <button type='submit'>Entrar</button> {/* Al hacer clic, llama a handleSubmit */}

        <div className='register-link'>
          <p>No tengo una cuenta <a href='#'>Registrarme</a></p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;

