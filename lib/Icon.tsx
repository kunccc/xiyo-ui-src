import React from 'react';
import './importIcons';

interface Props {
  name: string;
}

const Icon: React.FC<Props> = props => {
  return (
    <svg>
      <use xlinkHref={`#${props.name}`}/>
    </svg>
  );
};

export default Icon;