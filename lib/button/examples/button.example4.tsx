import React from 'react';
import Button from '../Button';

const ButtonExample4: React.FC = () => {
  return (
    <div className="button-example">
      <div>
        <Button size="big">大大</Button>
        <Button size="normal">中中</Button>
        <Button size="small">小小</Button>
      </div>
      <div>
        <Button theme="text" size="big">大大</Button>
        <Button theme="text" size="normal">中中</Button>
        <Button theme="text" size="small">小小</Button>
      </div>
      <div>
        <Button theme="link" size="big">大大</Button>
        <Button theme="link" size="normal">中中</Button>
        <Button theme="link" size="small">小小</Button>
      </div>
    </div>
  );
};

export default ButtonExample4;