import { links } from '../../data';

import logo from '../../assets/sidebar/logo.svg';
import { SidebarContainer } from './styles';
import { NavLink, useNavigate } from 'react-router-dom';

import { useAppContext } from '../../context/context';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleNavigation = (url) => {
    navigate(url);
  };

  const { isToggle, hideSidebar } = useAppContext();
  return (
    <SidebarContainer className={isToggle ? 'show-sidebar' : 'hide-sidebar'}>
      <div className="sidebar-header">
        <img src={logo} alt="coding addict" className="logo" />
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id} className="link">
              <NavLink
                to={url}
                onClick={() => {
                  hideSidebar();
                  handleNavigation(url);
                }}
              >
                <object
                  type="image/svg+xml"
                  data={icon}
                  width="17"
                  height="17"
                ></object>
                {/* <img src={icon} alt="link icon" /> */}
                {text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </SidebarContainer>
  );
};
export default Sidebar;
