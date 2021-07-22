import React from 'react';
import './importIcons';
import './icon.scss';

type Props = {
  name: string
} & React.SVGAttributes<SVGElement>

const Icon = (props: Props) => {
  const {name, children, className, ...rest} = props;
  return (
    <svg className={`xiyo-icon ${className ? className : ''}`} {...rest}>
      <use xlinkHref={'#' + props.name}/>
    </svg>
  );
};

export default Icon;