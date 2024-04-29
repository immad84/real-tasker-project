import { Wrapper } from './styles';
import Navbar from '../../components/navbar';
import ContactCard from '../../components/contact-card';
import ContactForm from '../../components/contact-form';
import { useAppContext } from '../../context/context';
import { LuHeading1 } from 'react-icons/lu';

const Dashboard = () => {
  const heading = 'admin management';
  const { showContactForm } = useAppContext();
  if (showContactForm) {
    return (
      <Wrapper>
        <Navbar heading={heading} />
        <ContactForm />
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <Navbar heading={heading} />
      <ContactCard />
    </Wrapper>
  );
};

export default Dashboard;
