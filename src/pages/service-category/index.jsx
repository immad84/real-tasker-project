import { Wrapper } from './styles';
import AdminCard from '../../components/admin-card';
import Navbar from '../../components/navbar';

const ServiceCategory = () => {
  const heading = 'service category management';
  return (
    <Wrapper>
      <Navbar heading={heading} />
      {/* <AdminCard /> */}
    </Wrapper>
  );
};

export default ServiceCategory;
