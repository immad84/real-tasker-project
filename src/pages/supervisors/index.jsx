import { Wrapper } from './styles';
import AdminCard from '../../components/admin-card';
import Navbar from '../../components/navbar';

const Supervisors = () => {
  const heading = 'supervisors management';
  return (
    <Wrapper>
      <Navbar heading={heading} />
      {/* <AdminCard /> */}
    </Wrapper>
  );
};

export default Supervisors;
