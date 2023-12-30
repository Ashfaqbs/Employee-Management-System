import React from 'react';

const Footer = () => {
  const footerStyle = {
    position: 'fixed',
    bottom: '0',
    width: '100vw ',
    height: 'auto',
    color: '#fff',
  };

  return (
    <footer style={footerStyle}>
      <div className="container">
        <span className="text-muted text-center">&copy;{new Date().getFullYear()} Your App Name | All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
