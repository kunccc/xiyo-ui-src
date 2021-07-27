import React, {useState} from 'react';
import Button from '../../button/Button';
import Dialog from '../Dialog';

const DialogExample2: React.FC = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  return (
    <div>
      <Button onClick={() => setVisible1(true)}>confirm</Button>
      <Dialog visible={visible1} onClose={() => setVisible1(false)} title="标题" type="confirm">confirm</Dialog>
      <Button onClick={() => setVisible2(true)}>alert</Button>
      <Dialog visible={visible2} onClose={() => setVisible2(false)} title="标题" type="alert">alert</Dialog>
      <Button onClick={() => setVisible3(true)}>modal</Button>
      <Dialog visible={visible3} onClose={() => setVisible3(false)} title="标题" type="modal">modal</Dialog>
    </div>
  );
};

export default DialogExample2;