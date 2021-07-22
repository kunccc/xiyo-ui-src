import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './Icon';

ReactDOM.render(
  <>
    <Icon name="wechat" className="aaa bbb ccc" onClick={() => {console.log('hi');}}/>
    <Icon name="qq"/>
  </>
  , document.querySelector('#root'));