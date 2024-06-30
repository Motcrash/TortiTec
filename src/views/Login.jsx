import React, { useEffect, useState } from 'react';
import userImg from '../assets/img/usuario.png';
import InputComponent from '../components/InputComponent';
import '../styles/loginStyle.css';
import '../styles/headerStyle.css';
import ButtonComponent from '../components/ButtonComponent';
import HeaderComponent from '../components/HeaderComponent';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

const URILogin = 'http://localhost:8000/users';

export default function Login({login , logout}) {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    logout();
  }, [logout])

  const notifyErrorLogin = () => toast.error('El usuario o contraseña son incorrectos');

  const userChange = (e) => {
    setUser(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const loginControl = async () => {
    try {
      const response = await axios.get(`${URILogin}/${user}/${password}`);
      if (response.data && response.data.length > 0) {
        login();
        navigate('/main');
      }
    } catch (error) {
      notifyErrorLogin();
    }
  };

  return (
    <div className='mainContainer'>
      <HeaderComponent />
      
      
      <div className='loginFormContainer'>

        <img src={userImg} alt='userImg' className='item2' />
        <div className='item3'>
          <InputComponent
            height={20}
            width={200}
            type='text'
            hasLabel={true}
            text='Usuario:'
            Placeholder='user'
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
            bgColor='#2f80ed'
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
  );
}