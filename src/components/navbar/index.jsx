import { useAppContext } from '../../context/context';
import { NavbarContainer } from './styles';
import { FaBars } from 'react-icons/fa';

import notification from '../../assets/panel/new.svg';

const Navbar = ({ heading }) => {
  const { showSidebar } = useAppContext();
  return (
    <NavbarContainer>
      <div className="heading">
        <button className="btn sidebar-toggle" onClick={showSidebar}>
          <FaBars />
        </button>
        <h2>
          <a href="#" style={{ color: 'black', textTransform: 'capitalize' }}>
            {heading}
          </a>
        </h2>
      </div>
      <ul className="notification-area">
        <li className="bell-icon">
          <img src={notification} alt="bell icon" className="bell-icon-img" />
        </li>
        <div className="divider"></div>
        <li className="admin-link">
          <a href="#" style={{ color: 'black' }}>
            Admin
          </a>
        </li>
      </ul>
    </NavbarContainer>
  );
};

export default Navbar;
