// src/components/Navbar.jsx
import React from 'react';
import logo from '../assets/logo.png'; 
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav
      style={{
        padding: '15px 30px',
        backgroundColor: '#fff8e1', // light gold
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #ccc',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
  <img
    src={logo}
    alt="KS Jewellers Logo"
    style={{ height: '50px', objectFit: 'contain' }}
  />
  <span style={{
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#bfa760',
    letterSpacing: '1px',
    fontFamily: 'Georgia, serif'
  }}>
    KS Jewellers
  </span>
</div>


      <ul
        style={{
          display: 'flex',
          gap: '20px',
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
      >
        
<ul style={{ display: 'flex', gap: '20px', listStyle: 'none' }}>
  <li><Link to="/" style={linkStyle}>Home</Link></li>
  <li><Link to="/about" style={linkStyle}>About</Link></li>
  <li><Link to="/explore" style={linkStyle}>Explore</Link></li>
  <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
</ul>
        

      </ul>
    </nav>
  );
};

const linkStyle = {
  textDecoration: 'none',
  color: '#333',
  fontWeight: '500',
  transition: 'color 0.3s',
};

export default Navbar;
