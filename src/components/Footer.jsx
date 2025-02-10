import React from 'react';
import './Footer.css'; // Import the custom CSS file

const Footer = () => {
  return (
    <footer className="footer py-2 fixed-bottom">
      <div className="container">
        <div className="text-center mt-3">
          <p>&copy; 2025 Robcom. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;