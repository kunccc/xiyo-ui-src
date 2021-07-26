import React, {ReactElement} from 'react';
import Aside from './components/Aside';
import './layout.scss';

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: Array<ReactElement>
}

const Layout: React.FC<Props> = ({children, className, ...rest}) => {
  const hasAside = children.reduce((result, node) => result || node.type === Aside, false);
  return (
    <div
      className={`xiyo-layout ${className ? className : ''} ${hasAside ? 'xiyo-layout-has-aside' : ''}`.trim()} {...rest}>
      {children}
    </div>
  );
};

export default Layout;