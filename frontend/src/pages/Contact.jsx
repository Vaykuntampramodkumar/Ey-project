import React from 'react';

const Contact = () => {
  return (
    <div className="container mt-4 p-4" style={{ backgroundColor: '#f8f9fa', fontFamily: 'Arial, sans-serif', borderRadius: '10px' }}>
      <h2 style={{ color: '#d9534f', fontWeight: 'bold' }}>Contact Us</h2>
      <p style={{ color: '#555', fontSize: '18px' }}>We’d love to hear from you! Reach out to us for reservations, inquiries, or feedback.</p>
      
      <div style={{ textAlign: 'left', maxWidth: '600px', width: '100%' }}>
        <p><strong>Address:</strong> 123 Gourmet Street, Food City, FC 45678</p>
        <p><strong>Phone:</strong> +1 234 567 890</p>
        <p><strong>Email:</strong> contact@gourmetdelight.com</p>
        <p><strong>Opening Hours:</strong> Monday - Sunday: 10 AM - 10 PM</p>
      </div>
    </div>
  );
};

export default Contact;
