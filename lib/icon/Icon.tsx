import React from 'react';
import '../helper/importIcons';
import './icon.scss';
import classes from '../helper/classes';

type Props = {
  name: string
} & React.SVGAttributes<SVGElement>

const Icon: React.FC<Props> = ({name, children, className, ...rest}) => {
  return (
    <svg className={classes('xiyo-icon', className)} {...rest}>
      <use xlinkHref={'#' + name}/>
    </svg>
  );
};

export default Icon;