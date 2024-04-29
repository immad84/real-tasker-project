// building page index

import { Wrapper, CardContainer } from './styles';
import AdminCard from '../../components/admin-card';
import Navbar from '../../components/navbar';
import Card from '../../components/card';

const Buildings = () => {
  const heading = 'building management';
  return (
    <Wrapper>
      <Navbar heading={heading} />
      <CardContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardContainer>
    </Wrapper>
  );
};

export default Buildings;
