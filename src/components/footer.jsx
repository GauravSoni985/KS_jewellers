// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor:'#aaaa93ff',
      padding: '4px 10px',
      borderTop: '1px solid #ddd',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      fontFamily: 'sans-serif',
    }}>
      
      {/* Left: Copyright */}
      <p style={{
        margin: 0,
        color: 'black',
        fontSize: '0.95rem'
      }}>
        © {new Date().getFullYear()} KS Jewellers — All Rights Reserved.
      </p>

      {/* Right: Designer credit */}
      <p style={{
        margin: 0,
        color: 'black',
        fontWeight: '500',
        fontSize: '0.95rem'
      }}>
        Designed & Developed by <span style={{ fontWeight: 'bold' }}>Gaurav Soni</span>
      </p>
    </footer>
  );
};

export default Footer;
