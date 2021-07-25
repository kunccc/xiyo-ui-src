import React, {useState, useEffect} from 'react';
import Button from '../../button/Button';

interface Props {
  unmount?: Function;
}

const Alert: React.FC<Props> = ({children, unmount}) => {
  const [visible, setVisible] = useState(false);
  const close = () => {
    setVisible(false);
    setTimeout(() => unmount!(), 300);
  };
  useEffect(() => setVisible(true), []);
  return (
    <>
      <div className={`xiyo-dialog-mask ${visible ? 'visible' : ''}`}/>
      <div className={`xiyo-dialog ${visible ? 'visible' : ''}`}>
        <span className="xiyo-dialog-close" onClick={close}/>
        <header>提示</header>
        <main>{children}</main>
        <footer>
          <Button onClick={close} level="main">确定</Button>
        </footer>
      </div>
    </>
  );
};

export default Alert;