// src/components/Hero.jsx
import React from 'react';
import jewelleryImage from '../assets/image.png'; 

const Home = () => {
  return (
    <section
      id="home"
      style={{
        backgroundImage: `url(${jewelleryImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 20px',
        color: '#fff', // white text
        position: 'relative',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // dark overlay for contrast
          padding: '40px',
          borderRadius: '10px',
          maxWidth: '800px',
        }}
      >
        <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>
          Welcome to KS Jewellers
        </h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
          Where tradition meets elegance. Handcrafted silver jewellery restored and reimagined for every occasion.
        </p>
        <button
          style={{
            marginTop: '25px',
            padding: '10px 20px',
            fontSize: '1rem',
            backgroundColor: '#bfa760', // gold color
            color: '#000',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Explore Collection
        </button>
      </div>
    </section>
  );
};

export default Home;
