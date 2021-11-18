import * as React from 'react';
import {useState} from 'react';
import Select from '../Select';

const SelectExample1: React.FC = () => {
  const [, setValue] = useState<number | string | boolean | object | undefined>('');
  const options = [{label: 'Jack', value: 20}, {label: 'Rose', value: '19'}, {label: 'Kunc', value: false}];
  return (
    <Select options={options} onChange={value => setValue(value)}/>
  );
};

export default SelectExample1;