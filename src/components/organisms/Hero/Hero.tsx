import ButtonLarge from '../../atoms/ButtonLarge/ButtonLarge';
import Pharagraph from '../../atoms/Paragraph/Pharagraph';
import Title from '../../atoms/Title/Title';
import './Hero.scss';

const Hero = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <div className="hero">
            <Title fontSize="85" title_text="We make crypto clear and simple" />
            <Pharagraph
              fontSize="16"
              para="Buy, sell, and grow your crypto with CoinFlip, the platform
              dedicated to every trader at every level."
            />
            <ButtonLarge />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
