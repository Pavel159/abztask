import React, { useEffect, useState } from 'react';
import cl from './Team.module.scss';
import Button from '../UI/Button';
import { fetchTeamMembers } from '../../api/api';
import TeamItem from './TeamItem';

const Team = ({ members, totalPages, currentPage, showMoreMembers }) => {
  // const [members, setMembers] = useState([]);
  // const [totalPages, setTotalPages] = useState(1);
  // const [currentPage, setCurrentPage] = useState(null);

  // useEffect(() => {
  //   fetchTeamMembers(1, 6).then((data) => {
  //     setMembers(data.users);
  //     setTotalPages(data.total_pages);
  //     setCurrentPage(1);
  //   });
  // }, []);

  // const showMoreMembers = () => {
  //   let page = currentPage + 1;
  //   fetchTeamMembers(page, 6).then((data) => {
  //     setMembers((prev) => [...prev, ...data.users]);
  //     setCurrentPage(page);
  //     console.log('currentpage:', currentPage);
  //     console.log('total:', totalPages);
  //   });
  // };
  // console.log(members);

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
