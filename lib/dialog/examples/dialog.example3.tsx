import React, {useState} from 'react';
import Button from '../../button/Button';
import Dialog from '../Dialog';

const DialogExample1: React.FC = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Button onClick={() => setVisible(true)}>打开</Button>
      <Dialog visible={visible} onClose={() => setVisible(false)} title="标题" onConfirm={() => console.log('yes')}
              onCancel={() => console.log('no')}>你确定要删除吗？</Dialog>
    </div>
  );
};

export default DialogExample1;