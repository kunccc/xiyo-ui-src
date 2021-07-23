import React from 'react';
import './button.scss';

interface Props {
  level?: string;
  theme?: string;
  size?: string;
  loading?: boolean;
  disable?: boolean;
}

const Button: React.FC<Props> = props => {
  const {theme, size, level, loading} = props;
  const classes = () => {
    return `xiyo-button-theme-${theme ? theme : 'button'} xiyo-button-size-${size ? size : 'normal'} xiyo-button-level-${level ? level : 'normal'}`;
  };
  return (
    <button className={'xiyo-button ' + classes()} disabled={props.disable}>
      <span className={(loading ? 'xiyo-button-loadingIndicator' : '').trim()}/>
      {props.children}
    </button>
  );
};

export default Button;