import React from 'react';
import { Link } from 'react-router-dom';

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
    <h1>g</h1>
   /* <div>
      {links.map((link, index) => (
        <Link key={index} to={link.href}>{link.name}</Link>
      ))}
    </div> */
  );
};

export default NavBarComponent;
