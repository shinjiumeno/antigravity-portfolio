import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '4rem 0 2rem',
      fontFamily: 'var(--font-family-en)',
      color: 'var(--color-text-accent)',
      fontSize: '0.9rem'
    }}>
      <p>&copy; {new Date().getFullYear()} Taro Yamada. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
