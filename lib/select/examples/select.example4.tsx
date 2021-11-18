import * as React from 'react';
import Select from '../Select';

const SelectExample4: React.FC = () => {
  const options = [{label: 'Jack', value: 20}, {label: 'Rose', value: '19'}, {label: 'Kunc', value: false}];
  return (
    <Select options={options} disabled/>
  );
};

export default SelectExample4;