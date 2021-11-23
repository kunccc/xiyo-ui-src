import * as React from 'react';
import Demo from '../../Demo';
import DatepickerExample from './examples/datepicker.example';

const DatepickerDemo: React.FC = () => {
  return (
    <>
      <h2>Datepicker 日期选择器</h2>
      <p className="detail">用于选择日期</p>
      <Demo code={require('!!raw-loader!./examples/datepicker.example').default}
            title="基本用法"><DatepickerExample/></Demo>
    </>
  );
};

export default DatepickerDemo;