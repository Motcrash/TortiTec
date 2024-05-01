import React from 'react'
import userImg from '../assets/img/user.png';
import InputComponent from '../components/InputComponent';
import '../styles/loginStyle.css'
import ButtonComponent from '../components/ButtonComponent'

export default function Login() {
  return (
    <div className='mainContainer'>
        <h1 className='item1'>Sistema de Tortitec</h1>
        <img src={userImg} alt='userImg' className='item2'/>
        <div className='item3'>
            <InputComponent
            height={20}
            width={200}
            type='text'
            hasLabel={true}
            textLabel='Usuario'
            />
            <InputComponent
            height={20}
            width={200}
            type='password'
            hasLabel={true}
            textLabel='Contraseña'
            />
            <ButtonComponent
              text='Ingresar'
              bgColor='#0077cc'
              txtColor='#fff'
              borderRadius={20}
            />
        </div>
    </div>
  )
}
