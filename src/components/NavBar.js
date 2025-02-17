import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <img src="/logoATB.png" alt="Logo" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
      <Link to="/reclamation">
 
</Link>
      
    </nav>
  );
};

export default NavBar;