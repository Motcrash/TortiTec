import React from 'react'
import userImg from '../assets/img/user.png';
import InputComponent from '../components/InputComponent';
import '../styles/loginStyle.css'
import '../styles/headerStyle.css'
import ButtonComponent from '../components/ButtonComponent'
import HeaderComponent from '../components/HeaderComponent';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className='mainContainer'>
        <HeaderComponent />
        
        <div className='loginFormContainer'>
          <img src={userImg} alt='userImg' className='item2'/>
          <div className='item3'>
              <InputComponent
              height={20}
              width={200}
              type='text'
              hasLabel={true}
              text='Usuario:'
              Placeholder='example@mail.com'
              />
              <InputComponent
              height={20}
              width={200}
              type='password'
              hasLabel={true}
              text='Contraseña:'
              Placeholder='Password'
              />

              {/* Lo del button es temporal por lo pronto */}
              <Link to="/main" >
              <ButtonComponent
                text='Ingresar'
                bgColor='#0077cc'
                txtColor='#fff'
                borderRadius={15}
                height={35}
                width={100}
                margin={40}
              />
              </Link>
          </div>
        </div>
    </div>
  )
}
