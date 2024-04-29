import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/sidebar';

import { Wrapper } from './styles';

const Layout = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Outlet />
    </Wrapper>
  );
};
export default Layout;
