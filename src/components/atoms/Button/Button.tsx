import { FC } from 'react';
import './Button.scss';

type ButtonProps = {
  label: string;
  onClick: () => void;
};

const Button: FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
