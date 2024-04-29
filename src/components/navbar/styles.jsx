import styled from 'styled-components';

/* 
===========
Navbar 
===========
*/

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.3rem;

  @media screen and (min-width: 800px) {
    margin-bottom: 3rem;
  }

  .heading {
    display: flex;
    align-items: center;
    justify-content: space-start;
    width: 50%;
    padding: 1px;

    h2 {
      padding-left: 1rem;
      font-size: 1.1rem;
      font-weight: 900;
    }

    @media screen and (min-width: 800px) {
      h2 {
        padding-left: 5px;
        font-size: 1.5rem;
        letter-spacing: 0.3px;
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
    padding-right: 7px;

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
