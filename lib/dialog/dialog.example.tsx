import React, {useState} from 'react';
import Dialog from './Dialog';

const DialogExample: React.FC = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setVisible(x => !x)}>toggle</button>
      <Dialog visible={visible}>dialog</Dialog>
    </div>
  );
};

export default DialogExample;