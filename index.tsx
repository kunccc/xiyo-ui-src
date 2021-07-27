import * as React from 'react';
import * as  ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import IconExample from './lib/icon/icon.example';
import DialogExample from './lib/dialog/dialog.example';
import ButtonExample from './lib/button/button.example';
import LayoutExample from './lib/layout/layout.example';
import Layout from './lib/layout/Layout';
import Header from './lib/layout/components/Header';
import Aside from './lib/layout/components/Aside';
import Main from './lib/layout/components/Main';
import './index.scss';

ReactDOM.render(
  <Router>
    <Layout>
      <Header>
        <img src="./logo.png" alt=""/>
        <img src="./xiyo.png" alt=""/>
      </Header>
      <Layout>
        <Aside>
          <Link to="/icon">Icon</Link>
          <Link to="/dialog">对话框</Link>
          <Link to="/button">按钮</Link>
          <Link to="/layout">布局</Link>
        </Aside>
        <Main>
          <Route path="/icon" component={IconExample}/>
          <Route path="/dialog" component={DialogExample}/>
          <Route path="/button" component={ButtonExample}/>
          <Route path="/layout" component={LayoutExample}/>
        </Main>
      </Layout>
    </Layout>
  </Router>
  , document.querySelector('#root'));