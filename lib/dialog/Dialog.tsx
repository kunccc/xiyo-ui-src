import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../button/Button';
import './dialog.scss';

interface Props {
  visible: boolean;
  closeOnMask?: boolean;
  onClose: React.MouseEventHandler;
}

const Dialog: React.FC<Props> = props => {
  return (ReactDOM.createPortal(
    <>
      <div className={`xiyo-dialog-mask ${props.visible ? 'visible' : ''}`}
           onClick={e => props.closeOnMask && props.onClose(e)}/>
      <div className={`xiyo-dialog ${props.visible ? 'visible' : ''}`}>
        <span className="xiyo-dialog-close" onClick={props.onClose}/>
        <header>标题</header>
        <main>{props.children}</main>
        <footer>
          <Button onClick={props.onClose}>取消</Button>
          <Button level="main" onClick={props.onClose}>确定</Button>
        </footer>
      </div>
    </>
    , document.body));
};

export default Dialog;