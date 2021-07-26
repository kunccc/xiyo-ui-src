import React from 'react';

interface Props extends React.HTMLAttributes<HTMLElement> {

}

const Aside: React.FC<Props> = ({children, className, ...rest}) => {
  return (
    <div className={`xiyo-layout-aside ${className ? className : ''}`.trim()} {...rest}>
      aside
    </div>
  );
};

export default Aside;