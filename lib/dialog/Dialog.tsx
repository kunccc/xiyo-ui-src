import React from 'react';
import './dialog.scss';
import Icon from '../icon/Icon';

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
            <button>ok</button>
            <button>cancel</button>
          </footer>
        </div>
      </>
      : null
  );
};

export default Dialog;