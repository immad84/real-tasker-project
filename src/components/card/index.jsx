import image from '../../assets/card/image.svg';
import error from '../../assets/card/Error.svg';
import contacts from '../../assets/card/Contacts.svg';
import pencil from '../../assets/card/Pencil.svg';
import trash from '../../assets/card/Trash.svg';

import ellipse from '../../assets/card/Ellipse.svg';

import {
  CardContainer,
  Container,
  Icons,
  FloorBtn,
  Circles,
  Footer,
  ImageStack,
} from './styles';

const Card = () => {
  return (
    <CardContainer>
      <Container>
        <h3 className="title">Lorem ipsum Lorem ...</h3>
        <Icons>
          <span className="rect">
            <img src={error} alt="error icon" />
          </span>
          <span className="rect">
            <img src={contacts} alt="contacts icon" />
          </span>
          <span className="rect">
            <img src={pencil} alt="pencil icon" />
          </span>
          <span className="rect">
            <img src={trash} alt="trash icon" />
          </span>
        </Icons>
      </Container>
      <img src={image} alt="" className="card-img" />
      <Container>
        <FloorBtn type="button">floor management</FloorBtn>
        <Circles>
          <span className="dot">
            <img src={ellipse} alt="ellipse icon" />
            <div className="overlay one">201</div>
          </span>
          <span className="dot">
            <img src={ellipse} alt="ellipse icon" />
            <div className="overlay two">202</div>
          </span>
          <span className="dot">
            <img src={ellipse} alt="ellipse icon" />
            <div className="overlay three">+2</div>
          </span>
          <span className="dot">
            <div className="add"></div>
            {/* <img src={ellipse} alt="ellipse icon" /> */}
            <div className="overlay four">+</div>
          </span>
        </Circles>
        <Footer>
          <div className="supervisors">
            <p>supervisors</p>
            <ImageStack>
              <img src={ellipse} alt="ellipse icon" className="img-1" />
              <img src={ellipse} alt="ellipse icon" className="img-2" />
              <img src={ellipse} alt="ellipse icon" className="img-3" />
              <div className="add">+</div>
            </ImageStack>
          </div>

          <div className="contacts">
            <p>contacts</p>
            <ImageStack>
              <img src={ellipse} alt="ellipse icon" className="img-1" />
              <img src={ellipse} alt="ellipse icon" className="img-2" />
              <img src={ellipse} alt="ellipse icon" className="img-3" />
              <div className="add">+</div>
            </ImageStack>
          </div>
        </Footer>
      </Container>
    </CardContainer>
  );
};
export default Card;
