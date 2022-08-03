import React from 'react';
import cl from './TeamItem.module.scss';

const TeamItem = (props) => {
  return (
    <div className={cl.team__item}>
      <img alt='member' src={props.photo} />
      <p className={cl.item__name}>{props.name}</p>
      <p className={cl.item__text}>{props.position}</p>
      <p className={cl.item__text}>{props.email}</p>
      <p className={cl.item__text}>{props.phone}</p>
    </div>
  );
};

export default TeamItem;
