import * as React from 'react';
import {useState, useEffect, useRef} from 'react';
import Icon from '../icon/Icon';
import './backTop.scss';

interface Props {
  visibilityHeight?: number;
  right?: number;
  bottom?: number;
  className?: string;
}

const BackTop: React.FC<Props> = props => {
  const backTop = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (props.right !== undefined) backTop.current!.style.right = props.right + 'px';
    if (props.bottom !== undefined) backTop.current!.style.bottom = props.bottom + 'px';
    let listener = () => {
      if (document.querySelector('.site')!.scrollTop > (props.visibilityHeight !== undefined ? props.visibilityHeight : 200)) setTimeout(() => setVisible(true), 250);
      else setTimeout(() => setVisible(false), 250);
    };
    window.addEventListener('scroll', listener, true);
    return () => window.removeEventListener('scroll', listener);
  });
  return (
    <div className={`xiyo-back-top ${visible ? 'visible' : ''} ${props.className ? props.className : ''}`.trim()}
         ref={backTop}
         onClick={() => document.querySelector('.site')!.scrollTo({top: 0, behavior: 'smooth'})}>
      <Icon name="arrow"/>
    </div>
  );
};

export default BackTop;