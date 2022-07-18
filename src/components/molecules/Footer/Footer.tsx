import Input from '../../atoms/Input/Input';
import Logo from '../../atoms/Logo/Logo';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-xs-4">
            <div className="left">
              <div className="footer__logo">
                <Logo />
              </div>
              <p className="footer__left--para">
                CoinFlip, the worlds leading bitcoin ATM operator, makes it so
                flippin easy to buy and sell bitcoin via cash, card, or bank
                transfer.
              </p>
              <p>
                Sign up to get the latest in CoinFlip news, discounts, and more.
              </p>
              <Input />
              <p className="flag">© 2021 GPD Holdings, LLC FinCEN MSB</p>
            </div>
          </div>
          <div className="col-xs-4">
            <div className="middle">
              <ul>
                <li className="footer__list--cuts">
                  <a className="a__bold" href="/">
                    Company
                  </a>
                  <a href="/">About</a>
                  <a href="/">Careers</a>
                  <a href="/">Press</a>
                  <a href="/">News</a>
                  <a href="/">Merch</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xs-4">
            <div className="right">
              <ul>
                <li className="footer__list--privacy">
                  <a href="/">Privacy Policy and Terms of Service</a>
                  <a href="/">CoinFlip Privacy Policy</a>
                  <a href="/">CoinFlip Biometrics Privacy Policy</a>
                  <a href="/">CoinFlip Financial Privacy Notice</a>
                  <a href="/">CoinFlip Terms of Service</a>
                  <a href="/">CoinFlip Trade Desk Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
