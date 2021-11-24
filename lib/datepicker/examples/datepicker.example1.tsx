import * as React from 'react';
import {useState} from 'react';
import Datepicker from '../Datepicker';

const DatepickerExample1: React.FC = () => {
  const [, setSelected] = useState({});
  return (
    <Datepicker onChanged={data => setSelected(data)}/>
  );
};

export default DatepickerExample1;