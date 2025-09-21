import React from 'react';

const Contact = () => {
  return (
    <section
      id="contact"
      style={{
        padding: '60px 20px',
        backgroundColor: 'rgba(255, 248, 225, 0.94)',
        textAlign: 'center',
        color: '#333',
      }}
    >
      <h2 style={{ fontSize: '2.2rem', color: '#bfa760', marginBottom: '30px' }}>
        Contact Us
      </h2>

      <div style={{ fontSize: '1.1rem', color: '#555', marginBottom: '30px' }}>
        <p>📞 <strong>Kamlesh Soni:</strong> +91-9414401487 (contact for buying jewellery )</p>
        <p>📞 <strong>Satish Soni:</strong> +91-9602626514  (contact only for electroplating or silver Coating)</p>
        <p>🏠 <strong>Home:</strong> Patwari Colony, Gurjar Mauhalla, Gangapur City, Rajasthan - 322201</p>
        <p>🏪 <strong>Shop:</strong> Ghaas Mandi, Baans Bajar, Amar Singh Katla, Gangapur City, Rajasthan - 322201</p>
      </div>

      {/* Google Map */}
      <div style={{ marginTop: '20px' }}>
        <iframe
          title="KS Jewellers Shop Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14145.904392969215!2d76.71916904999999!3d26.48184765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3971f5bb6e8b60d9%3A0x7a623f05ef0f2f9!2sGhaas%20Mandi%2C%20Gangapur%20City%2C%20Rajasthan%20322201!5e0!3m2!1sen!2sin!4v1720500000000!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: '10px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
