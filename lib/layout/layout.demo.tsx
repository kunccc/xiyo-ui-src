import React from 'react';
import Demo from '../../Demo';
import LayoutExample from './examples/layout.example';

const LayoutDemo: React.FC = () => {
  return (
    <>
      <h2>Layout 布局</h2>
      <p className="detail">用于快速简便地创建布局</p>
      <Demo code={require('!!raw-loader!./examples/layout.example').default} title="基本用法"><LayoutExample/></Demo>
    </>
  );
};

export default LayoutDemo;