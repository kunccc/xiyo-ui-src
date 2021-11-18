import * as React from 'react';
import Select from '../Select';

const SelectExample3: React.FC = () => {
  const options = [
    {label: 'Jack', value: 20},
    {label: 'Rose', value: '19', disabled: true},
    {label: 'Kunc', value: false}
  ];
  return (
    <Select options={options}/>
  );
};

export default SelectExample3;