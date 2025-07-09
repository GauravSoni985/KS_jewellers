import React from 'react';
import kamleshImg from '../assets/papa.jpg';
import satishImg from '../assets/chacha.jpg';
import familyImg from '../assets/family.jpg';

const About = () => {
  return (
    <section
      id="about"
      style={{
        padding: '60px 20px',
        backgroundColor: '#fff',
        textAlign: 'center',
        color: '#333',
      }}
    >
      <h2
        style={{
          fontSize: '2.5rem',
          marginBottom: '30px',
          color: '#bfa760',
        }}
      >
        Founders of KS Jewellers
      </h2>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '40px',
          flexWrap: 'wrap',
          marginBottom: '50px',
        }}
      >
        {/* Kamlesh */}
        <div style={{ textAlign: 'center', maxWidth: '200px' }}>
          <img
            src={kamleshImg}
            alt="Kamlesh Soni"
            style={{
              width: '100%',
              maxWidth:'100%',
              height: '50%',
              borderRadius: '10px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
          />
          <h3 style={{ marginTop: '10px', fontSize: '1.2rem', color: '#222' }}>
            Kamlesh Soni
          </h3>
          <h4 style={{ fontSize: '0.95rem', color: '#777' }}>
            (Contact for buying jewellery)
          </h4>
        </div>

        {/* Satish */}
        <div style={{ textAlign: 'center', maxWidth: '200px' }}>
          <img
            src={satishImg}
            alt="Satish Soni"
            style={{
              width: '100%',
              maxWidth:'100%',
              height: '50%',
              borderRadius: '10px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
          />
          <h3 style={{ marginTop: '10px', fontSize: '1.2rem', color: '#222' }}>
            Satish Soni
          </h3>
          <h4 style={{ fontSize: '0.95rem', color: '#777' }}>
            (Contact for electroplating / silver coating)
          </h4>
        </div>
      </div>

      {/* Family Photo */}
      <div style={{ textAlign: 'center', maxWidth: '300px', margin: '0 auto' }}>
        <img
          src={familyImg}
          alt="Family"
          style={{
            width: '100%',
            maxWidth:'100%',
            height: 'auto',
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}
        />
      </div>
    </section>
  );
};

export default About;
