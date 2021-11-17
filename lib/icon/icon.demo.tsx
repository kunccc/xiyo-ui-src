import React from 'react';
import Demo from '../../Demo';
import IconExample from './examples/icon.example';
import Attributes from '../../Attributes';

const IconDemo: React.FC = () => {
  const attributes = [{parameter: 'name', description: 'icon 文件的名字', type: 'string'}];
  return (
    <>
      <h2>Icon 图标</h2>
      <p className="detail">用于展示 SVG 格式的 icon 图标</p>
      <p className="detail-more">其中 Icon 组件的封装欢迎参考我的博客：<a href="https://www.yuque.com/u1847179/eb66q5/av7gd5"
                                                          className="blog">封装一个完美的 React Icon 组件</a></p>
      <Demo code={require('!!raw-loader!./examples/icon.example').default} title="基本用法"><IconExample/></Demo>
      <Attributes attributes={attributes}/>
    </>
  );
};

export default IconDemo;