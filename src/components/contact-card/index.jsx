import { useAppContext } from '../../context/context';

import arrowLeft from '../../assets/panel/left.svg';
import arrowRight from '../../assets/panel/right.svg';

import {
  Section,
  Button,
  RedBtn,
  GreenBtn,
  BlueBtn,
  Search,
  ActionSelect,
  FooterBtn,
  PageSelect,
} from './styles';

import { users } from '../../data';
import User from '../admin-card/user';

const ContactCard = () => {
  const { setShowContactForm } = useAppContext();
  return (
    <Section>
      <div className="header">
        <form className="form">
          <Button type="button" className="hide">
            + Add Admin
          </Button>
          <div className="btn-group">
            <RedBtn type="button">pdf</RedBtn>
            <GreenBtn type="button">excel</GreenBtn>
            <BlueBtn type="button">report</BlueBtn>
          </div>

          <Search
            type="search"
            name="search"
            id="search"
            placeholder="search"
          />
        </form>
      </div>
      <div className="table" style={{ overflowX: 'scroll' }}>
        <table>
          <thead>
            <tr>
              <th className="name">name</th>
              <th className="email">email</th>
              <th className="phone">phone</th>
              <th className="img">Active</th>
              <th className="actions">actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return <User user={user} />;
            })}
          </tbody>
        </table>
      </div>

      {/* Footer  */}
      <div className="footer">
        <FooterBtn
          type="button"
          className="show"
          onClick={() => {
            setShowContactForm(true);
          }}
        >
          + Add Contact
        </FooterBtn>
        <div className="pagination">
          <label htmlFor="pages">
            Rows per page:
            <PageSelect name="pages" id="pages">
              <option value="1">1</option>
              <option value="3">3</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </PageSelect>
          </label>
          <p>1-8 of 1240</p>
          <img src={arrowLeft} alt="left arrow icon " className="arrow-left" />
          <img
            src={arrowRight}
            alt="right arrow icon"
            className="arrow-right"
          />
        </div>
      </div>
    </Section>
  );
};

export default ContactCard;
