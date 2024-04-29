import styled from 'styled-components';

import calenderIcon from '../../assets/panel/2012.svg';

/* 
===========
Section 
=========== 
*/

export const FormContainer = styled.form`
  width: 100%;
  // height: 100%;
  background: #ffffff;
  border: 1.5px solid #dfe0eb;
  border-radius: 8px;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    text-transform: capitalize;

    h2:first-child {
      flex-grow: 1;
    }

    button {
      text-align: center;
      background: transparent;
      border: none;
      padding-top: 5px;
      padding-right: 1.3rem;
    }
  }

  .form-fields {
    padding: 1rem 5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;

    label {
      display: block;
      text-transform: uppercase;
      font-size: 13px;
      font-weight: 700;
      color: #9fa2b4;
      margin-bottom: 5px;
    }

    input {
      display: block;
      // width: 100%;
      // height: 100%;
      width: 400px;
      height: 42px;
      border-radius: 8px;
      border: 1px solid #f0f1f7;
    }

    input::placeholder {
      text-transform: capitalize;
      padding-left: 5px;
      font-size: 14px;
      font-weight: 400;
      color: #4b506d;
    }

    .radio-btn {
      width: 316px;

      label {
        display: inline-block;
      }

      input[type='radio'] {
        width: 12px;
        height: 12px;
        display: inline-block;
      }

      #male {
        // margin: 0 1.5rem 0 3px;
        // text-transform: capitalize;
      }

      #male + label,
      #female + label {
        margin: 0 1.5rem 0 3px;
        text-transform: capitalize;
        font-size: 15px;
        font-weight: 400;
      }

      #female {
        // margin: 0 1.5rem 0 3px;
      }
    }

    .custom-file-input {
      position: relative;
      display: inline-block;
      width: 400px;
      height: 42px;
      border-radius: 8px;
      border: 1px solid #f0f1f7;
      /* padding: 0 1rem; */
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }

    .custom-file-input input[type='file'] {
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
    }

    .custom-file-input .browse {
      background-color: #f4f4f4;
      color: #4b506d;
      /* height: 42px; */
      padding: 12.4px 20px;
      margin-top: 5px;
      border-radius: 5px;
      border: none;
      cursor: pointer;
      /* margin-left: 100%; */
    }

    /* Hide the default appearance */
    input[type='date'] {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
    }

    /* Custom icon */
    input[type='date']::-webkit-calendar-picker-indicator {
      background: url(${calenderIcon}) no-repeat;
      background-size: contain;
      width: 20px; /* Adjust size as needed */
      height: 20px; /* Adjust size as needed */
      cursor: pointer;
    }

    /* Optional: Example custom border */
    input[type='date'] {
      width: 400px;
      height: 42px;
      background-color: #fcfdfe;
      /* color: #4b506d; */
      /* height: 42px; */
      padding: 0 20px;
      border-radius: 5px;
      border: none;
      cursor: pointer;
      /* margin-left: 100%; */
    }

    @media screen and (min-width: 800px) {
      gap: 2rem;
    }
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

/* 
===========
Button
===========
*/

export const Button = styled.button`
  width: 113px;
  height: 2rem;
  background: #29cc97;
  color: #ffffff;
  border-color: #29cc97;
  border-radius: 100px;
  font-size: 13.5px;
  font-weight: 900;
  line-height: 13px;
  // letter-spacing: 0.5px;
  text-align: center;
  text-transform: capitalize;
  //   display: ${(props) => (props.show ? 'inline-block' : 'none')};
`;

export const FooterBtn = styled(Button)`
  width: 147px;
  height: 48px;
  margin-top: 2rem;
  margin-bottom: 2.3rem;
  margin-right: 2rem;
  font-size: 15px;
  //   display: ${(props) => (props.show ? 'inline-block' : 'none')};
`;

export const ResetBtn = styled(FooterBtn)`
  background: #cc2929;
  border-color: #cc2929;
`;
