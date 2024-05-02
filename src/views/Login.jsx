import React from 'react'
import userImg from '../assets/img/user.png';
import InputComponent from '../components/InputComponent';
import '../styles/loginStyle.css'
import ButtonComponent from '../components/ButtonComponent'

export default function Login() {
  return (
    <div className='mainContainer'>
        <header>
          <h1 className='item1'>Sistema de Tortitec</h1>
        </header>
        <div className='loginFormContainer'>
          <img src={userImg} alt='userImg' className='item2'/>
          <div className='item3'>
              <InputComponent
              height={20}
              width={200}
              type='text'
              hasLabel={true}
              text='Usuario'
              Placeholder='example@mail.com'
              />
              <InputComponent
              height={20}
              width={200}
              type='password'
              hasLabel={true}
              text='Contraseña'
              Placeholder='Password'
              />
              <ButtonComponent
                text='Ingresar'
                bgColor='#0077cc'
                txtColor='#fff'
                borderRadius={15}
                height={30}
                width={100}
              />
          </div>
        </div>
    </div>
  )
}
