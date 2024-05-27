import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from './views/Login';
import Main from "./views/Main";
import Stock from "./views/Stock";
import Sales from "./views/Sales";
import Detail from "./views/Detail";
import Edit from "./views/Edit";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/edit_product/:id" element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
