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
  const [visible] = useState(false);
  useEffect(() => {
    const xxx = document.documentElement;
    console.log(xxx);
    xxx.scroll = () => {
      console.log('fuck');
    };
  }, []);
  // useEffect(() => {
  //   if (props.right !== undefined) backTop.current!.style.right = props.right + 'px';
  //   if (props.bottom !== undefined) backTop.current!.style.bottom = props.bottom + 'px';
  //   const changeVisible = (standard: number) => {
  //     if (standard > (props.visibilityHeight !== undefined ? props.visibilityHeight : 200)) setTimeout(() => setVisible(true), 250);
  //     else setTimeout(() => setVisible(false), 250);
  //   };
  //   if (document.documentElement.clientWidth > 500) {
  //     let listener = () => changeVisible(document.documentElement.scrollTop);
  //     window.addEventListener('scroll', listener);
  //     return () => window.removeEventListener('scroll', listener);
  //   } else {
  //     console.log(document.querySelector<HTMLDivElement>('.site-main')!.clientHeight);
  //     console.log(document.documentElement.clientHeight);
  //     const maxTop = document.querySelector<HTMLDivElement>('.site-main')!.clientHeight + 57 - document.documentElement.clientHeight;
  //     let top = 0;
  //     let start: number;
  //     let wheelListener = (e: WheelEvent) => {
  //       top += e.deltaY;
  //       if (top > maxTop) top = maxTop;
  //       if (top < 0) top = 0;
  //       console.log(top);
  //       changeVisible(top);
  //     };
  //     let touchStartListener = (e: TouchEvent) => start = e.changedTouches[0].clientY;
  //     let touchEndListener = (e: TouchEvent) => {
  //       top -= (e.changedTouches[0].clientY - start);
  //       if (top > maxTop) top = maxTop;
  //       if (top < 0) top = 0;
  //       console.log(top);
  //       console.dir(document.querySelector('.site-main'));
  //       document.querySelector('.site-main')!.scrollTop = 500;
  //       changeVisible(top);
  //     };
  //     window.addEventListener('wheel', wheelListener);
  //     window.addEventListener('touchstart', touchStartListener);
  //     window.addEventListener('touchend', touchEndListener);
  //     return () => {
  //       window.removeEventListener('wheel', wheelListener);
  //       window.removeEventListener('touchstart', touchStartListener);
  //       window.removeEventListener('touchend', touchEndListener);
  //     };
  //   }
  // }, []);
  return (
    <div className={`xiyo-back-top ${visible ? 'visible' : ''}`.trim()} ref={backTop}
         onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
      <Icon name="arrow"/>
    </div>
  );
};

export default BackTop;