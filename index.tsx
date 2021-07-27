import * as React from 'react';
import * as  ReactDOM from 'react-dom';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
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
    <Layout className="site">
      <Header className="site-header">
        <img className="logo" src="./logo.png" alt=""/>
        <img className="xiyo" src="./xiyo.png" alt=""/>
      </Header>
      <Layout>
        <Aside className="site-aside">
          <ul>
            <li>
              <NavLink to="/icon">Icon 图标</NavLink>
            </li>
            <li>
              <NavLink to="/button">Button 按钮</NavLink>
            </li>
            <li>
              <NavLink to="/layout">Layout 布局</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">Dialog 对话框</NavLink>
            </li>
          </ul>
        </Aside>
        <Main className="site-main">
          <Route path="/icon" component={IconExample}/>
          <Route path="/button" component={ButtonExample}/>
          <Route path="/layout" component={LayoutExample}/>
          <Route path="/dialog" component={DialogExample}/>
        </Main>
      </Layout>
    </Layout>
  </Router>
  , document.querySelector('#root'));