import Pharagraph from '../../atoms/Paragraph/Pharagraph';
import Title from '../../atoms/Title/Title';
import Arror from '../../../assets/icons/arrow.png';
import './CryptoFeature.scss';
import { useEffect, useState } from 'react';
import CryptoData from '../../../models/CryptoModel';
import axios from 'axios';
import CryptoCard from '../../molecules/CryptoCard/CryptoCard';

const CryptoFeature = () => {
  const [cryptoData, setCryptoData] = useState<CryptoData>();

  const baseUrl =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false';

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((response) => {
        setCryptoData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <div className="crypto__header">
            <Title
              title_text="Buy and sell with the lowest fees in the industry"
              fontSize="50"
            />
            <Pharagraph
              para="Buy and sell 150+ cryptocurrencies with 20+ fiat currencies using bank transfers or your credit/debit card."
              fontSize="16"
            />
            <button className="crypto__button">
              Learn More <img src={Arror} alt="arrow" />
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <div className="crypto__trade-box">
            {cryptoData?.map((coin) => (
              <CryptoCard
                coin={coin.name}
                symbol={coin.symbol}
                current_price={coin.current_price}
                price_change={coin.price_change_percentage_24h}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoFeature;
