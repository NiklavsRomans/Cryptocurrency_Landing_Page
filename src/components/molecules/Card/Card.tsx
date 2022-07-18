import { FC } from 'react';
import ButtonCard from '../../atoms/ButtonCard/ButtonCard';
import './Card.scss';

type CardProps = {
  icon: string;
  title: string;
  description: string;
  buttonLabel: string;
};

const Card: FC<CardProps> = ({ icon, title, description, buttonLabel }) => {
  return (
    <div className="card__box">
      <div className="card__content">
        <img className="card__icon" src={icon} alt="icon" />
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
        <ButtonCard label={buttonLabel} />
      </div>
    </div>
  );
};

export default Card;
