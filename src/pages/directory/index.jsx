import { Wrapper } from './styles';
import AdminCard from '../../components/admin-card';
import Navbar from '../../components/navbar';

const Directory = () => {
  const heading = 'directory management';
  return (
    <Wrapper>
      <Navbar heading={heading} />
      {/* <AdminCard /> */}
    </Wrapper>
  );
};

export default Directory;
