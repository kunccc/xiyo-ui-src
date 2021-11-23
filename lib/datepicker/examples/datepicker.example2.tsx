import * as React from 'react';
import Datepicker from '../datepicker';

const DatepickerExample2: React.FC = () => {
  return (
    <Datepicker defaultValue={new Date(2008, 7, 8)}/>
  );
};

export default DatepickerExample2;