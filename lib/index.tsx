import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './index.scss';
import IconExample from './icon/icon.example';
import DialogExample from './dialog/dialog.example';

ReactDOM.render(
  <Router>
    <header>
      <Link to="/icon">Icon</Link>
      <Link to="/dialog">对话框</Link>
    </header>
    <main>
      <Route path="/icon" component={IconExample}/>
      <Route path="/dialog" component={DialogExample}/>
    </main>
  </Router>
  , document.querySelector('#root'));