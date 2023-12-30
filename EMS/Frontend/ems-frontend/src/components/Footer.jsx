import React from 'react';
const Footer = () => {
    const footerStyle = {
        position: 'fixed',
        bottom: '0',
        width: '100vw ',
        height: '5vh',
        color: '#fff',
        textAlign: 'center' // center the text
    };

    return (
        <footer style={footerStyle}>
            <div className="container">
                <span className="text-muted ">&copy;{new Date().getFullYear()} Ashfaq Dev | All rights reserved</span>
            </div>
        </footer>
    );
};

export default Footer;
