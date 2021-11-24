import React from 'react';
import '../../helper/importIcons';
import './icon.scss';

type Props = {
  name: string
} & React.SVGAttributes<SVGElement>

const Icon: React.FC<Props> = ({name, children, className, ...rest}) => {
  return (
    <svg className={`xiyo-icon ${className ? className : ''}`.trim()} {...rest}>
      <use xlinkHref={'#' + name}/>
    </svg>
  );
};

export default Icon;