import dropDown from '../../assets/panel/dropdown.svg';
import sortDown from '../../assets/panel/SortDown.svg';
import settings from '../../assets/panel/Settings.svg';
import active from '../../assets/panel/Ok.svg';
import search from '../../assets/panel/Search.svg';

import styled from 'styled-components';

/*  
===========
Main
===========
*/

export const Wrapper = styled.main`
  // width: clamp(70%, 80%, 100%);
  // margin-left: 20%;
  width: 100%;
  height: 650px;
  background: #f7f8fc;
  padding: 1rem;
  padding-right: 1.3rem;

  @media screen and (min-width: 800px) {
    width: calc(100% - 250px);
    margin-left: 250px;
  }
`;

/* 
===========
Navbar 
===========
*/

export const Navbar = styled.nav`
  display: flex; 
  justify-content: space-between;
  align-items: center;
  // margin-bottom: 5000rem;

  .heading {
    display: flex;
    align-items: center;
    justify-content: space-start;
    width: 50%;
    padding: 1px; 

    h2 {
      padding-left: 1rem;
      }
    }
  }

  .divider {
    height: 32px;
    border: 2.2px solid #dfe0eb;
  }

  ul {
    list-style-type: none;
  }

  .notification-area {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 50%;

    .bell-icon {
      padding-right: 1rem;
      .bell-icon-img {
        width: 1.5rem;
        height: 1.5rem;
      }
    }

    .admin-link {
      padding-left: 1rem;
      font-size: 1rem;
      font-weight: 600;
    }
  }

  .btn {
    cursor: pointer;
    color: white;
    background: #49a6e9;
    border: transparent;
    border-radius: 0.25rem;
    letter-spacing: 1px;
    padding: 0.275rem 0.75rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    transition: 0.3s ease-in-out all;
    text-transform: capitalize;
    display: inline-block;
  }

  .sidebar-toggle {
    // position: fixed;
    // top: 2rem;
    // left: 3rem;
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: #49a6e9;
    cursor: pointer;
    animation: bounce 2s ease-in-out infinite;
  }

  @media screen and (min-width: 800px) {
    .sidebar-toggle {
      display: none;
    }
  }

  @keyframes bounce {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

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

  .header,
  .footer {
    padding: 2rem;
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
        justify-content: space-between;
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
          // padding-left: 0.5rem;
        }
      }

      th:nth-child(5),
      td:nth-child(5) {
        option {
          background: url(${settings});
          background-repeat: no-repeat;
          background-position-x: 100%;
          background-position-y: 0.39rem;
          background-size: 1.2rem;
        }
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
          padding-right: 6rem;
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
  display: ${(props) => (props.show ? 'inline-block' : 'none')};
`;

export const FooterBtn = styled(Button)`
  width: 147px;
  height: 48px;
  margin-top: 2rem;
  margin-bottom: 2.3rem;
  margin-right: 2rem;
  font-size: 15px;
  display: ${(props) => (props.show ? 'inline-block' : 'none')};
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
  // background: url(${dropDown});
  // background-repeat: no-repeat;
  // background-position-x: 100%;
  // background-position-y: 0.39rem;
  // background-size: 1.2rem;
  padding-right: 1.2rem;
  // margin-left: 5px;
`;

export const PageSelect = styled(Select)`
  background: url(${dropDown});
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 0.39rem;
  background-size: 1.2rem;
  margin-left: 5px;
  padding: 0 0.5rem;
`;

export const ActionSelect = styled(Select)`
  width: 45px;
  height; 31px;
  background-color: #363740 !important;
  color: white;
  background: url(${sortDown});
  background-repeat: no-repeat;
  background-position-x: 75%;
  background-position-y: 0.55rem;
  // background-size: 1rem;
  border-radius: 8px;
  padding: 0 0.5rem;
`;
