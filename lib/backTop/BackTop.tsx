import * as React from 'react';
import {useState, useEffect, useRef} from 'react';
import Icon from '../icon/Icon';
import './backTop.scss';

interface Props {
  visibilityHeight?: number;
  right?: number;
  bottom?: number;
}

const BackTop: React.FC<Props> = props => {
  const backTop = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (props.right !== undefined) backTop.current!.style.right = props.right + 'px';
    if (props.bottom !== undefined) backTop.current!.style.bottom = props.bottom + 'px';
    window.onscroll = () => {
      if (document.documentElement.scrollTop > (props.visibilityHeight !== undefined ? props.visibilityHeight : 200)) setTimeout(() => setVisible(true), 250);
      else setTimeout(() => setVisible(false), 250);
    };
  }, []);
  return (
    <div className={`xiyo-back-top ${visible ? 'visible' : ''}`.trim()} ref={backTop}
         onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
      <Icon name="arrow"/>
    </div>
  );
};

export default BackTop;