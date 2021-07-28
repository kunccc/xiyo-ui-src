import React from 'react';
import Demo from '../../Demo';
import DialogExample1 from './examples/dialog.example1';
import DialogExample2 from './examples/dialog.example2';
import DialogExample3 from './examples/dialog.example3';
import DialogExample4 from './examples/dialog.example4';
import DialogExample5 from './examples/dialog.example5';

const DialogDemo: React.FC = () => {
  return (
    <>
      <h2>Dialog 对话框</h2>
      <p className="detail">弹出承载信息和操作的对话框</p>
      <Demo code={require('!!raw-loader!./examples/dialog.example1').default} title="基本用法"><DialogExample1/></Demo>
      <Demo code={require('!!raw-loader!./examples/dialog.example2').default} title="不同类型"><DialogExample2/></Demo>
      <Demo code={require('!!raw-loader!./examples/dialog.example3').default} title="接受回调"><DialogExample3/></Demo>
      <Demo code={require('!!raw-loader!./examples/dialog.example4').default}
            title="控制遮罩是否触发返回"><DialogExample4/></Demo>
      <Demo code={require('!!raw-loader!./examples/dialog.example5').default} title="便捷 API"><DialogExample5/></Demo>
    </>
  );
};

export default DialogDemo;