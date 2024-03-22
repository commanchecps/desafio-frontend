import React from 'react';

const Footer = ({ children }) => {
    return (
        <footer style={{ position: 'fixed', bottom: 0, width: '100%', background: "rgba(255, 255, 255, 0.9)" }}>
            {children}
        </footer>
    );
};

export default Footer;