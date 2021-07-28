import React from 'react';
import Button from '../../button/Button';
import {alert, confirm, modal} from '../Dialog';

const DialogExample5: React.FC = () => {
  return (
    <div className="dialog-example">
      <Button onClick={() => alert('Hello World')}>alert</Button>
      <Button onClick={() => confirm('你确定要删除吗？', () => console.log('yes'), () => console.log('no'))}>confirm</Button>
      <Button onClick={() => modal('标题', <h2>Hello World</h2>)}>modal</Button>
    </div>
  );
};

export default DialogExample5;