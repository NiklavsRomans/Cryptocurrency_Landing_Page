import ButtonLarge from '../../atoms/ButtonLarge/ButtonLarge';
import Pharagraph from '../../atoms/Paragraph/Pharagraph';
import Title from '../../atoms/Title/Title';
import './PlatformFeature.scss';

const PlatformFeature = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <div className="platform">
            <Title
              title_text="A crypto investment platform that invests in you "
              fontSize="50"
            />
            <Pharagraph
              para="We invest more resources than any other platrom in making sure great support from real people is a click away, whenever you need it."
              fontSize="16px"
            />
            <ButtonLarge />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformFeature;
