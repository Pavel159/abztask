import React from 'react';
import Button from '../UI/Button';
import cl from './Banner.module.scss';

const Banner = () => {
  return (
    <div className={cl.banner}>
      <div className={cl.banner__text}>
        <h1 className={cl.banner__heading}>
          Test assignment for front-end developer
        </h1>
        <p className={cl.banner__description}>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
        <Button width='100px' height='34px'>
          Sign up
        </Button>
      </div>
    </div>
  );
};

export default Banner;
