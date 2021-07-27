import React from 'react';
import Button from '../Button';

const ButtonExample3: React.FC = () => {
  return (
    <div>
      <Button theme="button">按钮</Button>
      <Button theme="text">文本</Button>
      <Button theme="link">链接</Button>
    </div>
  );
};

export default ButtonExample3;