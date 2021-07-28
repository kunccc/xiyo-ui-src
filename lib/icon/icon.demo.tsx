import React from 'react';
import Demo from '../../Demo';
import IconExample from './examples/icon.example';

const IconDemo: React.FC = () => {
  return (
    <>
      <h2>Icon 图标</h2>
      <p className="detail">用于展示 SVG 格式的 icon 图标</p>
      <Demo code={require('!!raw-loader!./examples/icon.example').default} title="基本用法"><IconExample/></Demo>
    </>
  );
};

export default IconDemo;