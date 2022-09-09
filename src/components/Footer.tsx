import React from "react";

const footerStyle:any = {
  marginTop: '1rem',
  padding: '1rem',
  backgroundColor: '#2b7a0b',
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  textAlign: 'start',
  color: 'white'
};

const Footer = () => (
  <div style={footerStyle}>
    <p>© 2022 Globus P4B All Rights Reserved</p>
  </div>
);

export default Footer;
