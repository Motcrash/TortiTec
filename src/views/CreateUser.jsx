import React, { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

import "../styles/createUserStyle.css";
import HeaderComponent from "../components/HeaderComponent";
import userImg from '../assets/img/usuario.png';
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";

const notifyCreate = () => toast.success("Usuario creado exitosamente", { id: "created", duration: 1200 });
const notifyError = () => toast.error("Oucrrió un error al cargar los datos", { id: "dataError", duration: 1200 });
const notifyUserExists = () => toast.error("El usuario que ingresó ya ha sido tomado", { id: "dataError", duration: 1200 });

const CreateUser = () => {

    const { URIUsers } = useContext( DataContext );

    const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.get(`${URIUsers}/${user}/${password}`);
      notifyUserExists();
    } catch {
      try {
        await axios.post(`${URIUsers}`, {
          user: user,
          password: password
        });
        navigate('/');
        notifyCreate();
      } catch (error) {
        notifyError();
      }
    }
  };

  return (
    <div className="createUserMainContainer">
      <HeaderComponent />
      <h2>Ingrese los datos del usuario</h2>

      <div className="createUserContainer">
        <div className="createUser-form-container">
          <img src={userImg} alt="imagen" draggable="false" />

          <form onSubmit={handleSubmit} className="createUser-form">

            <div className="form-createUser-group">
              <label htmlFor="userName">Nombre del usuario:</label>
              <input
                placeholder="Ingrese el usuario"
                type="text"
                id="name"
                value={user}
                onChange={handleUserChange}
                required
              />
            </div>

            <div className="form-createUser-group">
              <label htmlFor="userPassword">Contraseña:</label>
              <input
                placeholder="Ingrese la contraseña"
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>

            <button type="submit">Crear usuario</button>
          </form>
          <p>¿Ya tienes cuenta? <a className='createUserLink' href="/">Inicia sesión</a></p>
          <Toaster />
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
