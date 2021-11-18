import * as React from 'react';
import Select from '../Select';

const SelectExample2: React.FC = () => {
  const options = [{label: 'Jack', value: 20}, {label: 'Rose', value: '19'}, {label: 'Kunc', value: false}];
  return (
    <div className="select-example">
      <Select options={options} size="small"/>
      <Select options={options} size="normal"/>
      <Select options={options} size="large"/>
    </div>
  );
};

export default SelectExample2;