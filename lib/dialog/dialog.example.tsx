import React, {useState} from 'react';
import Dialog, {alert} from './Dialog';
import Button from '../button/Button';

const DialogExample: React.FC = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Button onClick={() => setVisible(v => !v)}>open</Button>
      <Dialog visible={visible} onClose={() => setVisible(false)} title="标题" type="confirm">hello</Dialog>
      <Button onClick={() => alert('你是猪吗')}>alert</Button>
    </div>
  );
};

export default DialogExample;