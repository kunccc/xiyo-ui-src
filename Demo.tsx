import * as React from 'react';
import {useState} from 'react';
import Highlight, {defaultProps} from 'prism-react-renderer';
import nightOwlLight from 'prism-react-renderer/themes/nightOwlLight';
import Icon from './lib/icon/Icon';
import Button from './lib/button/Button';

interface Props {
  code: string;
  title: string;
}

const Demo: React.FC<Props> = props => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="demo">
      <h3 className="demo-title">{props.title}</h3>
      <div className="demo-content">
        <div className="demo-content-component">
          {props.children}
        </div>
        <div className="demo-content-action" onClick={() => setVisible(v => !v)}>
          <Icon name="arrow" className={(visible ? 'codeVisible' : '').trim()}/>
          <div className="demo-content-action-button">
            <Button theme="link">{visible ? '隐藏代码' : '查看代码'}</Button>
          </div>
        </div>
        <div className={`demo-content-code ${(visible ? 'codeVisible' : '').trim()}`}>
          <Highlight {...defaultProps} theme={nightOwlLight} code={props.code} language="tsx">
            {({className, style, tokens, getLineProps, getTokenProps}) => (
              <pre className={className} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({line, key: i})}>
            {line.map((token, key) => (
              <span {...getTokenProps({token, key})} />
            ))}
          </div>
        ))}
      </pre>
            )}
          </Highlight>
        </div>
      </div>
    </div>
  );
};

export default Demo;