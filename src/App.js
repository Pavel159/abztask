import Banner from './components/banner/Banner';
import Header from './components/header/Header';
import { useEffect, useState, Suspense, lazy } from 'react';
import { fetchTeamMembers } from '../src/api/api';

const Team = lazy(() => import('./components/team/Team'));
const SignUp = lazy(() => import('./components/sign-up/SignUp'));

function App() {
  const [members, setMembers] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(null);

  useEffect(() => {
    fetchTeamMembers(1, 6).then((data) => {
      setMembers(data.users);
      setTotalPages(data.total_pages);
      setCurrentPage(1);
    });
  }, []);

  const showMoreMembers = () => {
    let page = currentPage + 1;
    fetchTeamMembers(page, 6).then((data) => {
      setMembers((prev) => [...prev, ...data.users]);
      setCurrentPage(page);
      console.log('currentpage:', currentPage);
      console.log('total:', totalPages);
    });
  };

  return (
    <div className='App'>
      <Header />
      <Banner />
      <Suspense fallback={<div>Content is loading...</div>}></Suspense>
      <Team
        members={members}
        currentPage={currentPage}
        totalPages={totalPages}
        showMoreMembers={showMoreMembers}
      />
      <SignUp
        members={members}
        currentPage={currentPage}
        totalPages={totalPages}
        fetchTeamMembers={fetchTeamMembers}
        setMembers={setMembers}
        setCurrentPage={setCurrentPage}
        setTotalPages={setTotalPages}
      />
    </div>
  );
}

export default App;
