import React from 'react';
import logo from '../../assets/Logo.svg';
import Button from '../UI/Button';
import cl from './Header.module.scss';

const Header = () => {
  return (
    <header className={cl.header}>
      <div className={cl.header__logo}>
        <img alt='logo' src={logo} />
      </div>
      <div className={cl.header__buttons}>
        <div className={cl.header__button}>
          <Button width='100px' height='34px'>
            Users
          </Button>
        </div>
        <div className={cl.header__button}>
          <Button width='100px' height='34px'>
            Sign up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
