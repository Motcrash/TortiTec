import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navBarStyle.css';

const links = [
  {
    name: "Venta",
    href: "/main"
  },
  {
    name: "Inventario",
    href: "/stock"
  },
  {
    name: "Historial",
    href: "/sells"
  },
  {
    name: "Cerrar Sesión",
    href: "/"
  },
];


const NavBarComponent = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <ul className='nav-links'>
          {links.map((link, index) => (
            <li key={index} className='nav-item'>
              <Link className='nav-link' to={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBarComponent;