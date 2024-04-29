import { Wrapper } from './styles';
import AdminCard from '../../components/admin-card';
import Navbar from '../../components/navbar';

const Tenants = () => {
  const heading = 'tenants management';
  return (
    <Wrapper>
      <Navbar heading={heading} />
      {/* <AdminCard /> */}
    </Wrapper>
  );
};

export default Tenants;
