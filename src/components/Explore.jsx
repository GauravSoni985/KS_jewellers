import React from 'react';

const Explore = () => {
  return (
    <section
      id="explore"
      style={{
        padding: '60px 20px',
        backgroundColor: '#f9f9f9',
        textAlign: 'center',
      }}
    >
      <h2 style={{ fontSize: '2.2rem', color: '#bfa760', marginBottom: '40px' }}>
        Explore More
      </h2>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '40px',
        }}
      >
        {/* 💍 Buy Jewellery Card */}
        <div
          style={{
            backgroundColor: '#fff',
            padding: '30px',
            borderRadius: '12px',
            maxWidth: '400px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s',
          }}
        >
          <h3 style={{ fontSize: '1.5rem', color: '#333', marginBottom: '15px' }}>
            💍 Buy Jewellery
          </h3>
          <p style={{ fontSize: '1rem', color: '#555', lineHeight: '1.6', marginBottom: '15px' }}>
            Browse our exclusive silver jewellery collection handcrafted with love and tradition. 
            From elegant daily wear to festive classics — find jewellery that suits every mood.
          </p>

          <div
            style={{
              backgroundColor: '#f5f5f5',
              padding: '10px 15px',
              borderRadius: '8px',
              color: '#444',
              fontSize: '0.95rem',
              lineHeight: '1.5',
            }}
          >
            <strong>Popular Items:</strong>
            <br />
            • Silver Chains – starting ₹150  
            <br />
            • Toe Rings / Bichhiya – ₹50 per pair  
            <br />
            • Traditional Payal – ₹400 onwards  
            <br />
            • Designer Pendants – ₹120+
          </div>
        </div>

        {/* ⚡ Electroplating Card */}
        <div
          style={{
            backgroundColor: '#fff',
            padding: '30px',
            borderRadius: '12px',
            maxWidth: '400px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s',
          }}
        >
          <h3 style={{ fontSize: '1.5rem', color: '#333', marginBottom: '15px' }}>
            ⚡ Electroplating (Silver Coating) and customized Anklet (payal and todiya) Manufacturing
          </h3>
          <p style={{ fontSize: '1rem', color: '#555', lineHeight: '1.6', marginBottom: '15px' }}>
            Bring back the shine of old jewellery with our expert silver electroplating. 
            We polish and recoat tarnished items to make them look brand new.
          </p>

          <div
            style={{
              backgroundColor: '#f5f5f5',
              padding: '10px 15px',
              borderRadius: '8px',
              color: '#444',
              fontSize: '0.95rem',
              lineHeight: '1.5',
            }}
          >
            <strong>Pricing:</strong>
            <br />
            RS.250/kg + added silver charge
            <h3>Note : The Anklet are Manufactured according to your order </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
