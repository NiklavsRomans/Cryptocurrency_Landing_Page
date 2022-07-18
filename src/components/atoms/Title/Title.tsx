import { FC } from 'react';
import './Title.scss';

type TitleProps = {
  title_text: string;
  fontSize: string;
};

const Title: FC<TitleProps> = ({ title_text, fontSize }) => {
  return (
    <h2 style={{ fontSize: `${fontSize}px` }} className="title">
      {title_text}
    </h2>
  );
};

export default Title;
