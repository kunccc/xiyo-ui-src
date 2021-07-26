import React from 'react';

interface Props extends React.HTMLAttributes<HTMLElement> {

}

const Main: React.FC<Props> = ({children, className, ...rest}) => {
  return (
    <div className={`xiyo-layout-main ${className ? className : ''}`.trim()} {...rest}>
      {children}
    </div>
  );
};

export default Main;