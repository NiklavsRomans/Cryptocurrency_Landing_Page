import './SupportFeature.scss';
import Support from '../../../assets/images/support.png';

const SupportFeature = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-6">
          <div className="image__box--support">
            <img className="support__image" src={Support} alt="Support" />
          </div>
        </div>
        <div className="col-xs-6">
          <div className="support__view">
            <h2 className="support__title">
              24/7 access to full <br /> service customer <br /> support
            </h2>
            <p className="support__para">
              We invest more resources than any other platform in making sure
              great <br /> support from real people is a click away, whenever
              you need it.
            </p>
            <button className="support__button">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportFeature;
