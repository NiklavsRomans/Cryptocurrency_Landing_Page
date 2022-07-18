import ButtonLarge from '../../atoms/ButtonLarge/ButtonLarge';
import Input from '../../atoms/Input/Input';
import Title from '../../atoms/Title/Title';
import './FirststepFeature.scss';
import Investment from '../../../assets/images/invest.png';

const FirststepFeature = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-6">
          <h2 className="step__title">
            Take your first step <br /> into safe, secure <br /> crypto
            investing
          </h2>
          <p className="step__para">
            Separated they live in Bookmarks right at the coast of the famous
            <br />
            Semantics, large language ocean Separated they live in Bookmarks
            right <br /> at the coast.
          </p>
          <ButtonLarge />
        </div>
        <div className="col-xs-6">
          <div className="investing__box--image">
            <img
              className="investing__image"
              src={Investment}
              alt="Investing"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <div className="transmission">
            <Title title_text="Receive transmissions" fontSize="50" />
            <p className="sub__para">
              Unsubscribe at any time.{' '}
              <span className="privacy">Privacy policy↗</span>
            </p>
            <Input />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirststepFeature;
