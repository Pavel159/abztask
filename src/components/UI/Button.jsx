import React from 'react';
import cl from './Button.module.scss';

const Button = ({ children, width, height, disabled, ...props }) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={cl.primaryButton}
      style={{
        width,
        height,
      }}>
      {children}
    </button>
  );
};

export default Button;
