import React from 'react';
import './importIcons';
import './icon.scss';

interface Props {
  name: string;
}

const Icon: React.FC<Props> = props => {
  return (
    <svg className="xiyo-icon">
      <use xlinkHref={`#${props.name}`}/>
    </svg>
  );
};

export default Icon;