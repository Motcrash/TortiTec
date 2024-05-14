import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from './views/Login';
import NavBarComponent from "./components/NavBarComponent";
import Main from "./views/Main";
// Import the Contact component if it exists
// import Contact from './views/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
