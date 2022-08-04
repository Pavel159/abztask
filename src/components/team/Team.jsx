import React from 'react';
import cl from './Team.module.scss';
import Button from '../UI/Button';
import TeamItem from './TeamItem';

const Team = ({ members, totalPages, currentPage, showMoreMembers }) => {
  return (
    <section className={cl.team}>
      <h1 className={cl.team__heading}>Working with GET request</h1>
      <div className={cl.team__container}>
        {members &&
          members.map((member) => (
            <TeamItem
              key={member.id}
              name={member.name}
              photo={member.photo}
              position={member.position}
              email={member.email}
              phone={member.phone}
            />
          ))}
      </div>
      {totalPages !== currentPage && (
        <Button onClick={showMoreMembers} width='120px' height='34px'>
          Show more
        </Button>
      )}
    </section>
  );
};

export default Team;
