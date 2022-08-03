import React from 'react';
import cl from './Input.module.scss';

const Input = (props) => {
  return <input className={cl.customInput} {...props} />;
};

export default Input;
