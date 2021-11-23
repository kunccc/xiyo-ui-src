import * as React from 'react';
import Demo from '../../Demo';
import DatepickerExample1 from './examples/datepicker.example1';
import DatepickerExample2 from './examples/datepicker.example2';
import DatepickerExample3 from './examples/datepicker.example3';
import DatepickerExample4 from './examples/datepicker.example4';
import DatepickerExample5 from './examples/datepicker.example5';
import Attributes from '../../Attributes';

const DatepickerDemo: React.FC = () => {
  const attributes = [
    {
      parameter: 'onChanged',
      description: '日期发生变化时的回调',
      type: 'function'
    },
    {
      parameter: 'defaultValue',
      description: '默认值',
      type: 'object'
    },
    {
      parameter: 'align',
      description: '选择框对齐方式',
      type: 'string',
      options: 'left / center / right',
      default: 'left'
    },
    {
      parameter: 'todayOptional',
      description: '是否可直接选今天',
      type: 'boolean',
      options: 'true / false',
      default: 'false'
    },
    {
      parameter: 'clearable',
      description: '是否支持清除日期',
      type: 'boolean',
      options: 'true / false',
      default: 'false'
    }
  ];
  return (
    // 跳年
    <>
      <h2>Datepicker 日期选择器</h2>
      <p className="detail">用于选择日期</p>
      <Demo code={require('!!raw-loader!./examples/datepicker.example1').default}
            title="基本用法"><DatepickerExample1/></Demo>
      <Demo code={require('!!raw-loader!./examples/datepicker.example2').default} title="支持设置默认值"><DatepickerExample2/></Demo>
      <Demo code={require('!!raw-loader!./examples/datepicker.example3').default} title="支持设置对齐方式"><DatepickerExample3/></Demo>
      <Demo code={require('!!raw-loader!./examples/datepicker.example4').default} title="支持直接选中今天"><DatepickerExample4/></Demo>
      <Demo code={require('!!raw-loader!./examples/datepicker.example5').default} title="支持清除已选日期"><DatepickerExample5/></Demo>
      <Attributes attributes={attributes}/>
    </>
  );
};

export default DatepickerDemo;