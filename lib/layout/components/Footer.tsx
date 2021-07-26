import React from 'react';

interface Props extends React.HTMLAttributes<HTMLElement> {

}

const Footer: React.FC<Props> = ({children, className, ...rest}) => {
  return (
    <div className={`xiyo-layout-footer ${className ? className : ''}`.trim()} {...rest}>
      {children}
    </div>
  );
};

export default Footer;