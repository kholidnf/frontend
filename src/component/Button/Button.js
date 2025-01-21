import React from 'react';

const Button = ({ size = 'md', children }) => {
  const theme = {
    sm: { fontSize: '0.8rem', padding: '0.2rem 0.5rem' },
    md: { fontSize: '1rem', padding: '0.5rem 1rem' },
    lg: { fontSize: '1.3rem', padding: '0.5rem 1rem' },
  };

  const styles = theme[size] || theme.md;

  return (
    <button style={{ fontSize: styles.fontSize, padding: styles.padding }}>
      {children}
    </button>
  );
};

export default Button;
