import React from 'react';
import Demo from '../../Demo';
import IconExample from './examples/icon.example';

const IconDemo: React.FC = () => {
  return (
    <>
      <h2>Icon 图标</h2>
      <p className="detail">用于展示 SVG 格式的 icon 图标</p>
      <p className="detail-more">其中 Icon 组件的封装欢迎参考我的博客：<a href="https://www.yuque.com/u1847179/eb66q5/av7gd5" className='blog'>封装一个完美的 React Icon 组件</a></p>
      <Demo code={require('!!raw-loader!./examples/icon.example').default} title="基本用法"><IconExample/></Demo>
    </>
  );
};

export default IconDemo;