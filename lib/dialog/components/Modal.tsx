import React, {useState, useEffect} from 'react';

interface modalProps {
  title: string;
  unmount?: Function;
}

const Modal: React.FC<modalProps> = ({children, unmount, title}) => {
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
        <header>{title}</header>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Modal;