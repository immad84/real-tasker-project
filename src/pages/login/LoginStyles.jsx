import styled from 'styled-components';
import img from '../../assets/bg-img.png';

export const Wrapper = styled.header`
  width: 100vw;
  height: 100vh;
  background-image: url(${img});
  background-position: 80% 100%;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  /*
  =============== 
  Image Overlay
  ===============
  */

  .overlay {
    width: 100%;
    height: 100%;
    background: #363740;
    opacity: 0.9;
  }

  /*
  =============== 
  Card
  ===============
  */

  .card {
    width: 380px;
    height: 548px;
    border-radius: 8px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #ffffff;
    border: 1px solid #dfe0eb;
    padding: 1.5rem;
  }

  /*
  =============== 
  Form
  ===============
  */

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: space-around;
    // padding: 2rem;
  }

  .img {
    margin-top: 2rem;
    margin-bottom: 3rem;
    text-align: center;
  }

  .img img {
    width: 137px;
    height: 100px;
  }

  label {
    margin-bottom: 0.5rem;
    color: #9fa2b4;
    font-weight: 700;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.3px;
  }

  input[type='text'],
  input[type='password'] {
    // margin-bottom: 1rem;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 8px;
    border: 1px solid #f0f1f7;
  }

  .btn {
    padding: 0.5rem;
    background: #337b6c;
    color: white;
    border-radius: 8px;
    margin-top: 1rem;
    padding: 1rem;
    text-transform: capitalize;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.2px;
  }

  @media (min-width: 576px) {
    .card {
      width: 450px;
    }
  }

  //   @media (min-width: 576px) {
  //     form {
  //       display: flex;
  //       flex-direction: column;
  //       justify-content: space-around;
  //       align-items: space-around;
  //       padding: 2rem;
  //     }

  //     label {
  //       margin-bottom: 5px;
  //     }

  //     input[type='text'],
  //     input[type='password'] {
  //       margin-bottom: 1rem;
  //       padding: 0.5rem;
  //     }
  //   }
`;
