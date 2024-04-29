import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  background-color: #363740;
  width: 250px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: gird;
  grid-template-rows: auto auto;
  row-gap: 1rem;
  box-shadow: #842029;
  transition: 0.3s ease-in-out transform;

  /* toggle logic */
  // transform: translateX(-100%);

  &.show-sidebar {
    transform: translateX(0);
    z-index: 100;
  }

  &.hide-sidebar {
    /* toggle logic */
    transform: translateX(-100%);
    transition: 0.3s ease-in-out all;
    z-index: 100;
    @media screen and (min-width: 800px) {
      &.hide-sidebar {
        transform: translateX(0);
      }
    }
  }

  /* 
  ===========
  Sidebar Header
  ===========
  */

  .sidebar-header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    margin-right: 1rem;
    margin-bottom: 2rem;

    .close-btn {
      font-size: 1.2rem;
      background: transparent;
      border-color: transparent;
      color: white;
      cursor: pointer;
      padding-top: 5px;
    }

    .close-btn:hover {
    }
  }

  /* 
  ===========
  Sidebar Links
  ===========
  */

  .links a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.8rem 2.2rem;
    color: #ffffff;
    transition: 0.3s ease-in-out background;
    letter-spacing: 0.2px;
    text-decoration: none;
  }

  .links a:hover {
    border-left: 5px solid #dde2ff;
    background: rgba(159, 162, 180, 1);
    // opacity: 1;
  }

  // .links li:hover {
  //   border-left: 5px solid #dde2ff;
  //   background: #9fa2b4;
  //   opacity: 1;
  // }

  .link:last-child {
    margin-top: 3rem;
    border-bottom: 3px solid #dfe0eb;
  }

  object svg {
    g > path {
      fill: gold;
      stroke: gold;
      stroke-width: 0.1;
      stroke-linejoin: round;
    }
  }
`;
