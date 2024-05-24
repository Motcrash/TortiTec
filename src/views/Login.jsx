import React, { useState } from 'react'
import userImg from '../assets/img/user.png';
import InputComponent from '../components/InputComponent';
import '../styles/loginStyle.css'
import '../styles/headerStyle.css'
import ButtonComponent from '../components/ButtonComponent'
import HeaderComponent from '../components/HeaderComponent';
import { Link  } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


export default function Login() {

 const [user, setUser] = useState('');
 const [password, setPassword] = useState('');

 const navigate = useNavigate();

 const notifyErrorLogin = () => toast.error('Datos incorrectos, intente de nuevo')

 const userChange = (e) => {
  setUser(e.target.value);
  console.log(user);
 }

 const passwordChange = (e) => {
  setPassword(e.target.value);
  console.log(password);
 }

 const loginControl = () => {
  // Lógica de autenticación
  console.log();
  if (user === 'hola' && password === '123') {
    navigate('/main');
  } else {
    notifyErrorLogin();
  }
};

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
              value={user}
              onChange={userChange}
              />
              
              <InputComponent
              height={20}
              width={200}
              type='password'
              hasLabel={true}
              text='Contraseña:'
              Placeholder='Password'
              value={password}
              onChange={passwordChange}
              />

              <ButtonComponent
                text='Ingresar'
                bgColor='#0077cc'
                txtColor='#fff'
                borderRadius={15}
                height={35}
                width={100}
                margin={40}
                onClick={loginControl}
              />

          </div>
          <Toaster />
        </div>
    </div>
  )
}
