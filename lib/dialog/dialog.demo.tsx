import React from 'react';
import Demo from '../../Demo';
import DialogExample1 from './examples/dialog.example1';
import DialogExample2 from './examples/dialog.example2';
import DialogExample3 from './examples/dialog.example3';
import DialogExample4 from './examples/dialog.example4';
import DialogExample5 from './examples/dialog.example5';
import Attributes from '../../Attributes';

const DialogDemo: React.FC = () => {
  const attributes = [
    {
      parameter: 'title',
      description: '对话框的标题',
      type: 'string'
    },
    {
      parameter: 'type',
      description: '对话框的类型',
      type: 'string',
      options: 'confirm / alert / modal',
      default: 'alert'
    },
    {
      parameter: 'visible',
      description: '控制对话框是否弹出的变量',
      type: 'boolean'
    },
    {
      parameter: 'onClose',
      description: '将 visible 变量更改为 false 的函数',
      type: 'function'
    },
    {
      parameter: 'closeOnMask',
      description: '控制点击遮罩时是否关闭 dialog',
      type: 'boolean',
      options: 'true / false',
      default: 'false'
    },
    {
      parameter: 'onConfirm',
      description: '点击确定后执行的回调',
      type: 'function'
    },
    {
      parameter: 'onCancel',
      description: '点击取消后执行的回调',
      type: 'function'
    }
  ];
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
      <Attributes attributes={attributes}/>
    </>
  );
};

export default DialogDemo;