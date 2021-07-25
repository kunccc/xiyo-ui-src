import React, {useState} from 'react';
import Dialog, {alert, confirm, modal} from './Dialog';
import Button from '../button/Button';

const DialogExample: React.FC = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Button onClick={() => setVisible(v => !v)}>open</Button>
      <Dialog visible={visible} onClose={() => setVisible(false)} title="标题" type="confirm">hello</Dialog>
      <Button onClick={() => alert('你是猪吗')}>alert</Button>
      <Button onClick={() => confirm('你是猪吗', () => console.log('对！'), () => console.log('no'))}>confirm</Button>
      <Button onClick={() => modal(<h1>你好</h1>)}>modal</Button>
    </div>
  );
};

export default DialogExample;