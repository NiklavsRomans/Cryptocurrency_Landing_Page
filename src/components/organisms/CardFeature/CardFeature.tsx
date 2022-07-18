import './CardFeature.scss';
import Card from '../../molecules/Card/Card';
import CardData from '../../../data/CardData';

const CardFeature = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <div className="cards__view">
            {CardData.map(({ icon, description, label, title }) => (
              <Card
                icon={icon}
                buttonLabel={label}
                title={title}
                description={description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFeature;
