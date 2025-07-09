// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#f4f4f4',
      padding: '25px 40px',
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
        color: '#666',
        fontSize: '0.95rem'
      }}>
        © {new Date().getFullYear()} KS Jewellers — All Rights Reserved.
      </p>

      {/* Right: Designer credit */}
      <p style={{
        margin: 0,
        color: '#bfa760',
        fontWeight: '500',
        fontSize: '0.95rem'
      }}>
        Designed & Developed by <span style={{ fontWeight: 'bold' }}>Gaurav Soni</span>
      </p>
    </footer>
  );
};

export default Footer;
