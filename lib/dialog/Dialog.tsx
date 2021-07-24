import React from 'react';
import {createPortal} from 'react-dom';
import Button from '../button/Button';
import './dialog.scss';

interface Props {
  visible: boolean;
  title?: string;
  closeOnMask?: boolean;
  onClose: Function;
  onCancel?: Function;
  onConfirm?: Function;
}

const Dialog: React.FC<Props> = ({onClose, visible, closeOnMask, title, children, onCancel, onConfirm}) => {
  return (createPortal(
    <>
      <div className={`xiyo-dialog-mask ${visible ? 'visible' : ''}`}
           onClick={() => closeOnMask && onClose()}/>
      <div className={`xiyo-dialog ${visible ? 'visible' : ''}`}>
        <span className="xiyo-dialog-close" onClick={() => onClose()}/>
        <header>{title}</header>
        <main>{children}</main>
        <footer>
          <Button onClick={() => onCancel && onCancel() || onClose()}>取消</Button>
          <Button onClick={() => onConfirm && onConfirm() || onClose()} level="main">确定</Button>
        </footer>
      </div>
    </>
    , document.body));
};

export default Dialog;