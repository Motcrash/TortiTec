import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from './views/Login';
import Main from "./views/Main";
import Stock from "./views/Stock";
import Sales from "./views/Sales";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/sales" element={<Sales />} />
      </Routes>
    </Router>
  );
}

export default App;
