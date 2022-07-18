import { FC } from 'react';
import './CryptoCard.scss';
import Arrow from '../../../assets/icons/arrow2.png';

type CryptoCardProps = {
  coin: string;
  symbol: string;
  current_price: number;
  price_change: number;
};

const CryptoCard: FC<CryptoCardProps> = ({
  coin,
  symbol,
  current_price,
  price_change,
}) => {
  return (
    <div className="crypto__card">
      <h3 className="coin__title">{coin}</h3>
      <h3 className="coin__symbol">{symbol.toUpperCase()}</h3>
      <span className="coin__price">${current_price.toLocaleString()}</span>
      {price_change < 0 ? (
        <span className="red">{price_change.toFixed(2)}%</span>
      ) : (
        <span className="green">+{price_change.toFixed(2)}%</span>
      )}
      <button className="trade__button">
        Trade now <img src={Arrow} alt="arrow" />
      </button>
    </div>
  );
};

export default CryptoCard;
