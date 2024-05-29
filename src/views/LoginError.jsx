import React from 'react'
import HeaderComponent from '../components/HeaderComponent';
import '../styles/loginError.css'
function LoginError() {
  return (
    <>
        <HeaderComponent />
        <h1 className='header1-error'>Inicia sesión para acceder a la aplicación</h1>
        <div className='container-error'>
        <img className='image-error' src='/src/assets/img/error.png' alt="errorIcon"/>
        </div>
        <div className='buttons-error'>
        <button>Inicia Sesión</button>
        </div>
    </>
  )
}

export default LoginError