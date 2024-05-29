import React from 'react'
import HeaderComponent from '../components/HeaderComponent';
import '../styles/loginError.css'
function LoginError() {
  return (
    <div>
        <HeaderComponent />
        <h1 className='header1-error'>Inicia sesión para acceder a la aplicación</h1>
    </div>
  )
}

export default LoginError