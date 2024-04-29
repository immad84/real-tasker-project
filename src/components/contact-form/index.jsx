import arrow from '../../assets/LeftArrow.svg';
import { useAppContext } from '../../context/context';

import { FormContainer, FooterBtn, ResetBtn } from './styles';

const ContactForm = () => {
  const { setShowContactForm, handleSubmit } = useAppContext();
  return (
    <FormContainer onSubmit={handleSubmit}>
      <div className="header">
        <h2>add contact</h2>
        <button
          type="button"
          onClick={() => {
            setShowContactForm(false);
          }}
        >
          <img src={arrow} alt="left arrow icon" />
        </button>
        <p>back</p>
      </div>

      <div className="form-fields">
        <div className="first-name">
          <label htmlFor="first-name">first name</label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            placeholder="your first name"
          />
        </div>

        <div className="date">
          <label htmlFor="dateInput">date of birth</label>
          <input type="date" name="dateInput" id="dateInput" />
        </div>

        {/* <div class="date">
          <input type="date" id="dateInput" name="dateInput" />
        </div> */}

        <div className="last-name">
          <label htmlFor="last-name">last name</label>
          <input
            type="text"
            name="last-name"
            id="last-name"
            placeholder="your last name"
          />
        </div>

        <div className="gender">
          <label>gender</label>
          <div className="radio-btn">
            <input type="radio" name="gender" id="male" checked />
            <label htmlFor="male">male</label>
            <input type="radio" name="gender" id="female" />
            <label htmlFor="female">female</label>
          </div>
        </div>

        <div className="email">
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="your email address"
          />
        </div>

        <div>
          <label htmlFor="fileInput">Choose a picture</label>
          <div className="custom-file-input">
            <label htmlFor="fileInput" style={{ padding: '10px' }}>
              Choose a File
            </label>
            <input type="file" id="fileInput" name="fileInput" />
            <label htmlFor="fileInput" className="browse">
              Browse
            </label>
          </div>
        </div>

        <div className="mobile">
          <label htmlFor="">mobile number</label>
          <input
            type="tel"
            name="mobile"
            id="mobile"
            placeholder="your phone number"
          />
        </div>
      </div>

      <div className="footer">
        <FooterBtn type="submit">submit</FooterBtn>
        <ResetBtn type="submit">reset</ResetBtn>
      </div>
    </FormContainer>
  );
};

export default ContactForm;
