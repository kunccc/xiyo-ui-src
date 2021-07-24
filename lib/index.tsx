import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom';
import IconExample from './icon/icon.example';
import DialogExample from './dialog/dialog.example';
import ButtonExample from './button/button.example';
import './index.scss';

ReactDOM.render(
  <Router>
    <header>
      <Link to="/icon">Icon</Link>
      <Link to="/dialog">对话框</Link>
      <Link to="/button">按钮</Link>
    </header>
    <Switch>
      <Route path="/icon" component={IconExample}/>
      <Route path="/dialog" component={DialogExample}/>
      <Route path="/button" component={ButtonExample}/>
    </Switch>
  </Router>
  , document.querySelector('#root'));