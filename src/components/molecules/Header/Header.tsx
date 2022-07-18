import Button from '../../atoms/Button/Button';
import Logo from '../../atoms/Logo/Logo';
import Navigation from '../../atoms/Navigation/Navigation';
import './Header.scss';

const Header = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <header className="header">
            <Logo />
            <div className="navigation__box">
              <Navigation />
            </div>
            <div className="button__box">
              <button className="button__sign-in">Sign In</button>
              <Button label="Sign Up" onClick={() => console.log('clicked')} />
            </div>
          </header>
        </div>
      </div>
    </div>
  );
};

export default Header;
