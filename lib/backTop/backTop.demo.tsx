import React, {useEffect, useState} from 'react';
import Demo from '../../Demo';
import BackTopExample from './examples/backTop.example';
import Attributes from '../../Attributes';

const backTopDemo: React.FC = () => {
  const [xxx, setxxx] = useState('');
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
  useEffect(() => {
    setxxx(`import * as React from 'react';
import BackTop from '../BackTop';

const backTopExample: React.FC = () => {
  return (
    <div>
      <p>往下滚动即可在右下方看到返回顶部按钮</p>
      <BackTop/>
    </div>
  );
};

export default backTopExample;
    `);
  });
  return (
    <>
      <h2>BackTop 返回顶部</h2>
      <p className="detail">用于返回页面顶部</p>
      <Demo code={xxx} title="基本用法"><BackTopExample/></Demo>
      <Attributes attributes={attributes}/>
      {document.documentElement.clientWidth > 500 ? <p style={{height: '500px'}}/> : null}
    </>
  );
};

export default backTopDemo;