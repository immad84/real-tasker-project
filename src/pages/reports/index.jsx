import { Wrapper } from './styles';
import AdminCard from '../../components/admin-card';
import Navbar from '../../components/navbar';

const Reports = () => {
  const heading = 'reports management';
  return (
    <Wrapper>
      <Navbar heading={heading} />
      {/* <AdminCard /> */}
    </Wrapper>
  );
};

export default Reports;
