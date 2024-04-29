import settings from '../../assets/panel/Settings.svg';
import sortDown from '../../assets/panel/SortDown.svg';

const User = ({ user }) => {
  const { id, avatar, email, phone, activeUser } = user;
  return (
    <tr key={id}>
      <td className="name">
        <img src={avatar} alt="admin icon" />
        Admin 1
      </td>
      <td className="email">{email}</td>
      <td className="phone">{phone}</td>
      <td>
        <img src={activeUser} alt="active icon" className="img" />
      </td>
      <td className="actions">
        <div className="selectors">
          <div id="selectField">
            <img src={settings} alt="settings icon" className="settings" />
            <img src={sortDown} alt="sortDown icon" className="sort" />
          </div>
          {/* <ul>
            <li></li>
          </ul> */}
        </div>
      </td>
    </tr>
  );
};
export default User;
