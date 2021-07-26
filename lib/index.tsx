import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import IconExample from './icon/icon.example';
import DialogExample from './dialog/dialog.example';
import ButtonExample from './button/button.example';
import LayoutExample from './layout/Layout.example';
import './index.scss';

ReactDOM.render(
  <Router>
    <header>
      <Link to="/icon">Icon</Link>
      <Link to="/dialog">对话框</Link>
      <Link to="/button">按钮</Link>
      <Link to="/layout">布局</Link>
    </header>
    <main>
      <Route path="/icon" component={IconExample}/>
      <Route path="/dialog" component={DialogExample}/>
      <Route path="/button" component={ButtonExample}/>
      <Route path="/layout" component={LayoutExample}/>
    </main>
  </Router>
  , document.querySelector('#root'));