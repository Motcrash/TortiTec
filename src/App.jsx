import React, { useState } from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from './views/Login';
import Main from "./views/Main";
import Stock from "./views/Stock";
import Sales from "./views/Sales";
import Detail from "./views/Detail";
// import Edit from "./views/Edit";
import ProtectedRoute from './components/ProtectedRouteComponent';

function App() {
  const [isLogIn, setLogIn] = useState(false);

  const login = () => {
    setLogIn(true);
  }

  const logout = () => {
    setLogIn(false);
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login login={login}/>} />
        <Route path="/main" element={<ProtectedRoute element={<Main />} isAuthenticated={isLogIn} to={'/main'}/>} />
        <Route path="/stock" element={<ProtectedRoute element={<Stock />} isAuthenticated={isLogIn} to={'/stock'}/>} />
        <Route path="/sales" element={<ProtectedRoute element={<Sales />} isAuthenticated={isLogIn} to={'/sales'}/>} />
        <Route path="/detail/:id" element={<ProtectedRoute element={<Detail />} isAuthenticated={isLogIn} to={'/detail/:id'}/>} />
        {/* <Route path="/edit_product/:id" element={<Edit />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
