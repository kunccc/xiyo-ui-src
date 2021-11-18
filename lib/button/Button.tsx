import React from 'react';
import './button.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  level?: string;
  theme?: string;
  size?: 'small' | 'normal' | 'large';
  loading?: boolean;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({theme, size, level, loading, children, ...rest}) => {
  const classes = () => {
    return `xiyo-button xiyo-button-theme-${theme ? theme : 'button'} xiyo-button-size-${size ? size : 'normal'} xiyo-button-level-${level ? level : 'normal'}`;
  };
  return (
    <button className={classes()} {...rest}>
      <span className={loading ? 'xiyo-button-loadingIndicator' : ''}/>
      {children}
    </button>
  );
};

export default Button;