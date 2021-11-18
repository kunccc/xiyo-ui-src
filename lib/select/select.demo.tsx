import * as React from 'react';
import Demo from '../../Demo';
import SelectExample1 from './examples/select.example1';
import SelectExample2 from './examples/select.example2';
import SelectExample3 from './examples/select.example3';
import SelectExample4 from './examples/select.example4';
import SelectExample5 from './examples/select.example5';
import SelectExample6 from './examples/select.example6';
import Attributes from '../../Attributes';

const SelectDemo: React.FC = () => {
  const attributes = [
    {
      parameter: 'options',
      description: '选项列表',
      type: 'object'
    },
    {
      parameter: 'onChange',
      description: '选中值变化时的回调',
      type: 'function'
    },
    {
      parameter: 'size',
      description: '选择器的大小',
      type: 'string',
      options: 'small / normal / large',
      default: 'normal'
    },
    {
      parameter: 'disabled',
      description: '是否禁用选择器',
      type: 'boolean',
      options: 'true / false',
      default: 'false'
    },
    {
      parameter: 'defaultValue',
      description: '默认选中值',
      type: 'string'
    },
    {
      parameter: 'clearable',
      description: '是否可清除已选项',
      type: 'boolean',
      options: 'true / false',
      default: 'false'
    },
  ];
  return (
    <>
      <h2>Select 选择器</h2>
      <p className="detail">向下弹出一个菜单展示并选择内容</p>
      <Demo code={require('!!raw-loader!./examples/select.example1').default} title="基本用法"><SelectExample1/></Demo>
      <Demo code={require('!!raw-loader!./examples/select.example2').default} title="支持不同大小"><SelectExample2/></Demo>
      <Demo code={require('!!raw-loader!./examples/select.example3').default} title="支持禁用选项"><SelectExample3/></Demo>
      <Demo code={require('!!raw-loader!./examples/select.example4').default} title="支持禁用选择器"><SelectExample4/></Demo>
      <Demo code={require('!!raw-loader!./examples/select.example5').default} title="支持设置默认值"><SelectExample5/></Demo>
      <Demo code={require('!!raw-loader!./examples/select.example6').default} title="支持清除已选项"><SelectExample6/></Demo>
      <Attributes attributes={attributes}/>
    </>
  );
};

export default SelectDemo;