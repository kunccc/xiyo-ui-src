import * as React from 'react';
import Datepicker from '../Datepicker';

const DatepickerExample3: React.FC = () => {
  return (
    <div className="datepicker-example">
      <p><span>靠左对齐：</span><Datepicker align="left"/></p>
      <p><span>居中对齐：</span><Datepicker align="center"/></p>
      <p><span>靠右对齐：</span><Datepicker align="right"/></p>
    </div>
  );
};

export default DatepickerExample3;