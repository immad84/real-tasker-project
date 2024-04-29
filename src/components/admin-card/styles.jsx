import dropDown from '../../assets/panel/dropdown.svg';
import sortDown from '../../assets/panel/SortDown.svg';
import settings from '../../assets/panel/Settings.svg';
import search from '../../assets/panel/Search.svg';

import styled from 'styled-components';

/* 
===========
Section 
===========
*/

export const Section = styled.section`
  width: 100%;
  // height: 100%;
  background: #ffffff;
  border: 1.5px solid #dfe0eb;
  border-radius: 8px;

  .header {
    padding: 2rem;
  }

  .footer {
    padding: 1rem;
  }

  .header {
    .form {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: space-between;
      align-items: space-around;

      input::placeholder {
        text-transform: capitalize;
        font-size: 1rem;
        font-weight: 400;
        color: #8a8a8a;
      }

      input[type='search'] {
        background-image: url(${search});
        background-repeat: no-repeat;
        background-position: 98%;
        font-size: 16px;
      }

      .btn-group {
        margin: 1rem 0;
        display: inline-block;
      }
    }
    @media screen and (min-width: 800px) {
      .form {
        flex-direction: row;
        flex-wrap: wrap;

        .btn-group {
          margin: 0 3rem 0 auto;
        }
      }
    }
  }

  .table {
    // overflow: 'scroll';

    table {
      border-collapse: collapse;
      width: 100%;

      // TR

      tr {
        display: flex;
        align-items: center;
        // justify-content: space-between;
        gap: 3rem;
        border-bottom: 3px solid #dfe0eb;
        padding: 12px 2rem 12px 2rem;
      }

      // TH and TD

      th {
        text-align: left;
        text-transform: capitalize;
        font-size: 14px;
        font-weight: 800;
        color: #9fa2b4;
      }

      td {
        text-align: left;
      }

      th:nth-child(1),
      td:nth-child(1) {
        width: 200px;
      }

      td:nth-child(1) {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
      }

      th:nth-child(2),
      td:nth-child(2) {
        width: clamp(3rem, 12rem, 15rem);
      }

      th:nth-child(3),
      td:nth-child(3) {
        width: clamp(3rem, 9rem, 10rem);
      }

      th:nth-child(4),
      td:nth-child(4) {
        width: 5rem;
        .img {
          padding-left: 5px;
        }
      }

      th:nth-child(5),
      td:nth-child(5) {
      }

      .selectors {
        background: transparent;
        width: 64px;
        height: 31px;
        // padding-left: 10px;
      }

      #selectField {
        width: 100%;
        height: 100%;
        background: #363740;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2px;
        cursor: pointer;
      }

      #selectField .settings {
        width: 1.2rem;
      }
    } // Table ends

    @media screen and (min-width: 800px) {
      table {
        th:nth-child(1),
        td:nth-child(1) {
          width: 300px;
        }

        th:nth-child(5),
        td:nth-child(5) {
          padding-right: 4rem;
        }
      }
    }
  } // .table class ends

  // Footer

  .footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    .pagination {
      height: 30px;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      p {
        margin: 0 1.5rem 0 2.6rem;
      }

      .arrow-left,
      .arrow-right {
        width: 1.5rem;
        height: 1.1rem;
      }
    }
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
  &.show {
    display: inline-block;
  }
  &.hide {
    display: none;
  }
  // display: ${(props) => (props.show ? 'inline-block' : 'none')};
`;

export const FooterBtn = styled(Button)`
  width: 147px;
  height: 48px;
  margin-top: 2rem;
  margin-bottom: 2.3rem;
  margin-right: 2rem;
  font-size: 15px;
  &.show {
    display: inline-block;
  }
  &.hide {
    display: none;
  }
  // display: ${(props) => (props.show ? 'inline-block' : 'none')};
`;

/* 
===========
Color Button
=========== 
*/

export const ColorBtn = styled.button`
  width: 100px;
  height: 2rem;
  background: transparent;
  border-radius: 100px;
  border-width: 3px;
  font-size: 0.8rem;
  font-weight: 700;
  line-height: 11.3px;
  letter-spacing: 0.5px;
  text-align: center;
  text-transform: uppercase;
`;

export const RedBtn = styled(ColorBtn)`
  // border: 3px solid #f15b6d;
  border-color: #f15b6d;
  color: #f15b6d;
  // margin: 0 1rem;
`;

export const GreenBtn = styled(ColorBtn)`
  border-color: #29cc97;
  color: #29cc97;
  margin: 0 1.5rem;
`;

export const BlueBtn = styled(ColorBtn)`
  border-color: #04c6f0;
  color: #04c6f0;
`;

/* 
===========
Search
===========
*/

export const Search = styled.input`
  width: 200px;
  border: none;
  border-bottom: 3px solid #dfe0eb;
  outline: none;
  padding: 0.5rem;
`;

/*
===========
Select
===========
*/

export const Select = styled.select`
  height: 2rem;
  border: none;
  outline: none;
  background: transparent;
  font-size: 1rem;
  appearance: none;
`;

export const PageSelect = styled(Select)`
  background: url(${dropDown});
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 0.39rem;
  background-size: 1.2rem;
  margin-left: 7px;
  padding-right: 0.9rem;
`;

export const ActionSelect = styled(Select)`
  width: 45px;
  height; 31px;
  background-color: #363740 !important;
  color: white;
  background: url(${sortDown}) ;
  background-repeat: no-repeat;
  background-position-x: 75%;
  background-position-y: 0.55rem;
  border-radius: 8px;
  padding: 0 0.5rem;
  position: relative;
`;

export const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: '#363740',
    width: '3em',
    height: '2rem',
    borderLeft: 'none', // Remove left border
    borderRight: '1px solid #ccc', // Add right border
    borderTop: 'none', // Remove top border
    borderBottom: 'none', // Remove bottom border
    borderRadius: '8px', // Optional: Remove border radius if needed
    boxShadow: 'none', // Optional: Remove box-shadow if needed
  }),
  menu: (provided) => ({
    ...provided,
    background: 'transparent',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    display: 'none',
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
  placeholder: (provided) => ({
    ...provided,
    // background: `${settings}`,
  }),
};

// ▼

// export const customDropdownIndicator = () => {
//   return (
//     <div style={{ color: 'white', padding: '2px' }}>
//       <img src={sortDown} alt="sort down arrow" />
//     </div>
//   );
// };

export const customDropdownIndicator = () => {
  return <div></div>;
};
