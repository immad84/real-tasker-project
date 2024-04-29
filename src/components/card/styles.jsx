import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 258px;
  height: 570px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 1rem;

  .card-img {
    width: 100%;
  }
`;

export const Container = styled.div`
  padding: 1rem 16px;
`;

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;

  .title {
    font-size: 14px;
    font-weight: 600;
  }

  .rect {
    width: 25px;
    height: 25px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
    margin: 0 5px;
    padding-top: 1px;
    border-radius: 5px;
  }

  .rect img {
    width: 90%;
    height: 90%;
  }
`;

export const FloorBtn = styled.button`
  width: 100%;
  height: 42px;
  display: block;
  border-radius: 8px;
  background: #363740;
  color: white;
  font-size: 14px;
  font-weight: 600;
  text-transform: capitalize;
`;

export const Circles = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1.2rem 0;

  .dot {
    position: relative;
  }

  .dot img {
    width: 44px;
    height: 44px;
  }

  .overlay {
    width: 100%;
    height: 44px;
    border-radius: 50%;
    position: absolute;
    // background: rgb(0, 0, 0);
    // opacity: 0.7;
    top: 0;
    font-size: 1.2rem;
    font-weight: 700;
    text-align: center;
    padding-top: 10px;
    color: white;
  }

  .one,
  .two,
  .three {
    background: rgb(0, 0, 0);
    opacity: 0.7;
  }

  .add {
    width: 44px;
    height: 44px;
    background: #4ac4f8;
    opacity: 0.8;
    border-radius: 50%;
    opacity: 1 !important;
  }
`;

export const Footer = styled.div`
  border: 1px solid black;
  border-radius: 12px;
  border: 1px solid #9fa2b4;

  .supervisors,
  .contacts {
    height: 3rem;
    display: flex;
    // justify-content: space-around;
    align-items: center;
    padding-left: 1rem;
    font-size: 1rem;
    font-weight: 500;
    // letter-spacing: 0.4px;
  }

  // .contacts p::after {
  //   content: 'aa';
  // }
`;

export const ImageStack = styled.div`
  position: relative;
  display: flex;

  .img-1 {
    width: 2rem;
    height: 2rem;
    position: absolute;
    left: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
  }

  .img-2 {
    width: 2rem;
    height: 2rem;
    position: absolute;
    left: 2.5rem;
    top: 50%;
    transform: translateY(-50%);
  }

  .img-3 {
    width: 2rem;
    height: 2rem;
    position: absolute;
    left: 3.5rem;
    top: 50%;
    transform: translateY(-50%);
  }

  .add {
    position: absolute;
    width: 2rem;
    height: 2rem;
    background: #4ac4f8;
    border-radius: 50%;
    left: 5rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.3rem;
    color: white;
    text-align: center;
    padding: 3px;
  }
`;
