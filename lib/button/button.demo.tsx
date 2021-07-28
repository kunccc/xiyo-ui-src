import React from 'react';
import Demo from '../../Demo';
import ButtonExample1 from './examples/button.example1';
import ButtonExample2 from './examples/button.example2';
import ButtonExample3 from './examples/button.example3';
import ButtonExample4 from './examples/button.example4';
import ButtonExample5 from './examples/button.example5';
import ButtonExample6 from './examples/button.example6';

const ButtonDemo: React.FC = () => {
  return (
    <>
      <h2>Button 按钮</h2>
      <p className="detail">用于开始一个即时操作</p>
      <Demo code={require('!!raw-loader!./examples/button.example1').default} title="基本用法"><ButtonExample1/></Demo>
      <Demo code={require('!!raw-loader!./examples/button.example2').default} title="不同级别"><ButtonExample2/></Demo>
      <Demo code={require('!!raw-loader!./examples/button.example3').default} title="不同类型"><ButtonExample3/></Demo>
      <Demo code={require('!!raw-loader!./examples/button.example4').default} title="不同尺寸"><ButtonExample4/></Demo>
      <Demo code={require('!!raw-loader!./examples/button.example5').default}
            title="支持 loading"><ButtonExample5/></Demo>
      <Demo code={require('!!raw-loader!./examples/button.example6').default}
            title="支持 disabled"><ButtonExample6/></Demo>
    </>
  );
};

export default ButtonDemo;