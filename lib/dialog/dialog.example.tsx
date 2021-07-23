import React, {useState} from 'react';
import Dialog from './Dialog';
import Button from '../button/Button';

const DialogExample: React.FC = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Button onClick={() => setVisible(x => !x)}>toggle</Button>
      <Dialog visible={visible}>dialog</Dialog>
    </div>
  );
};

export default DialogExample;