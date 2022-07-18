import { FC } from 'react';
import './ButtonCard.scss';
import Arrow from '../../../assets/icons/arrow.png';

type ButtonCardProps = {
  label: string;
};

const ButtonCard: FC<ButtonCardProps> = ({ label }) => {
  return (
    <button className="card__button">
      {label} <img src={Arrow} alt="arror" />
    </button>
  );
};

export default ButtonCard;
