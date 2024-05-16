import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navBarStyle.css'

const links = [
  {
    name: "Login",
    href: "/login"
  },
  {
    name: "Contact",
    href: "/contact"
  },
];

const NavBarComponent = () => {
  return (
    <>
    <nav className='navegacion'>
      <ul className='lista'>
      {links.map((link, index) => (
        <li> <Link key={index} to={link.href}>{link.name}</Link></li>
      ))}
      </ul>
    </nav> 
    </>
  );
};

export default NavBarComponent;
