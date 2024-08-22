import React, { useState } from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from './views/Login';
import Main from "./views/Main";
import Stock from "./views/Stock";
import Sells from "./views/Sells.jsx";
import Detail from "./views/Detail";
import LoginError from "./views/LoginError";
import AddProduct from "./views/AddProduct";
import EditProduct from "./views/EditProduct"; 
import CreateUser from "./views/CreateUser.jsx"; 

import { DataProvider } from './context/DataContext.jsx'

function App() {
  const [isLogIn, setLogIn] = useState(true);

  const login = () => {
    setLogIn(true);
  }

  const logout = () => {
    setLogIn(false);
  }

  return (
    <Router>
        <DataProvider>
          <Routes>
            <Route path="/" element={<Login login={login} logout={logout}/>} />
            <Route path="/create_user" element={<CreateUser/>} />
            <Route path="/loginError" element={<LoginError />}/>
            <Route path="/main" element={<Main />}  />
            <Route path="/stock" element={<Stock />} />
            <Route path="/sells" element={<Sells />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/add_product/" element={<AddProduct />} />
            <Route path="/edit_product/:id" element={<EditProduct />} />
          </Routes>
        </DataProvider>
    </Router>
  );
}

export default App;
