// dashboard page index

import { Wrapper } from './styles';
import AdminCard from '../../components/admin-card';
import Navbar from '../../components/navbar';

const Administrators = () => {
  const heading = 'admin management';
  return (
    <Wrapper>
      <Navbar heading={heading} />
      <AdminCard />
    </Wrapper>
  );
};

export default Administrators;
