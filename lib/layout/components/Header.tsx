import React from 'react';

interface Props extends React.HTMLAttributes<HTMLElement> {

}

const Header: React.FC<Props> = ({children, className, ...rest}) => {
  return (
    <div className={`xiyo-layout-header ${className ? className : ''}`.trim()} {...rest}>
      {children}
    </div>
  );
};

export default Header;