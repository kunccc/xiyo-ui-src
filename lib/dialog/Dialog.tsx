import React from 'react';
import {createPortal} from 'react-dom';
import Button from '../button/Button';
import './dialog.scss';

interface Props {
  visible: boolean;
  title?: string;
  type: 'confirm' | 'alert' | 'modal';
  closeOnMask?: boolean;
  onClose: Function;
  onCancel?: Function;
  onConfirm?: Function;
}

const Dialog: React.FC<Props> = ({onClose, visible, closeOnMask, title, type, children, onCancel, onConfirm}) => {
  return (createPortal(
    <>
      <div className={`xiyo-dialog-mask ${visible ? 'visible' : ''}`}
           onClick={() => closeOnMask && onClose()}/>
      <div className={`xiyo-dialog ${visible ? 'visible' : ''}`}>
        <span className="xiyo-dialog-close" onClick={() => onClose()}/>
        <header>{title}</header>
        <main>{children}</main>
        <footer>
          {type === 'confirm' && <Button onClick={() => onCancel && onCancel() || onClose()}>取消</Button>}
          {(type === 'confirm' || type === 'alert') &&
          <Button onClick={() => onConfirm && onConfirm() || onClose()} level="main">确定</Button>}
        </footer>
      </div>
    </>
    , document.body));
};

export default Dialog;