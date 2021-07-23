import React from 'react';
import Icon from '../icon/Icon';
import Button from '../button/Button';
import './dialog.scss';

interface Props {
  visible: boolean;
}

const Dialog: React.FC<Props> = props => {
  return (
    props.visible ?
      <>
        <div className="xiyo-dialog-mask"/>
        <div className="xiyo-dialog">
          <div className="xiyo-dialog-close"><Icon name="close"/></div>
          <header>标题</header>
          <main>{props.children}</main>
          <footer>
            <Button>ok</Button>
            <Button>cancel</Button>
          </footer>
        </div>
      </>
      : null
  );
};

export default Dialog;