import React from 'react';
import Demo from '../../Demo';
import BackTopExample from './examples/backTop.example';
import Attributes from '../../Attributes';

const backTopDemo: React.FC = () => {
  const attributes = [
    {
      parameter: 'visibilityHeight',
      description: '滚动高度达到此参数值才出现返回按钮',
      type: 'number',
      default: '200'
    },
    {
      parameter: 'right',
      description: '控制返回按钮距离页面右侧的边距',
      type: 'number',
      default: '50'
    },
    {
      parameter: 'bottom',
      description: '控制返回按钮距离页面底部的边距',
      type: 'number',
      default: '50'
    }
  ];
  return (
    <>
      <h2>BackTop 返回顶部</h2>
      <p className="detail">用于返回页面顶部</p>
      <Demo code={require('!!raw-loader!./examples/backTop.example').default} title="基本用法"><BackTopExample/></Demo>
      <Attributes attributes={attributes}/>
      <p style={{height: '500px'}}/>
    </>
  );
};

export default backTopDemo;