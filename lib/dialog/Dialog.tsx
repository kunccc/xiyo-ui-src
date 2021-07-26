import React, {ReactNode, ReactElement} from 'react';
import ReactDOM from 'react-dom';
import Button from '../button/Button';
import Alert from './components/Alert';
import Confirm from './components/Confirm';
import Modal from './components/Modal';
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
  return (ReactDOM.createPortal(
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

const createDialog = (component: ReactElement) => {
  const unmount = () => ReactDOM.unmountComponentAtNode(container) && container.remove();
  const container = document.createElement('div');
  document.body.appendChild(container);
  ReactDOM.render(React.cloneElement(component, {unmount}), container);
};
const cd = createDialog;

const alert = (content: string) => cd(<Alert>{content}</Alert>);
const confirm = (content: string, yes: Function, no: Function) => cd(<Confirm yes={yes} no={no}>{content}</Confirm>);
const modal = (title: string, content: ReactNode) => cd(<Modal title={title}>{content}</Modal>);

export {alert, confirm, modal};
export default Dialog;