import { FC } from 'react';
import './Pharagraph.scss';

type PharagraphProps = {
  para: string;
  fontSize: string;
};

const Pharagraph: FC<PharagraphProps> = ({ para, fontSize }) => {
  return (
    <p style={{ fontSize: `${fontSize}px` }} className="paragraph">
      {para}
    </p>
  );
};

export default Pharagraph;
