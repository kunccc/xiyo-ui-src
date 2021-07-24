import React, {useState} from 'react';
import Dialog from './Dialog';
import Button from '../button/Button';

const DialogExample: React.FC = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Button onClick={() => setVisible(v => !v)}>open</Button>
      <Dialog visible={visible} onClose={() => setVisible(false)}>Hello World</Dialog>
    </div>
  );
};

export default DialogExample;