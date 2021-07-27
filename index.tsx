import * as React from 'react';
import * as  ReactDOM from 'react-dom';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import IconDemo from './lib/icon/icon.demo';
import DialogDemo from './lib/dialog/dialog.demo';
import ButtonDemo from './lib/button/button.demo';
import LayoutDemo from './lib/layout/layout.demo';
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
          <Route path="/icon" component={IconDemo}/>
          <Route path="/button" component={ButtonDemo}/>
          <Route path="/layout" component={LayoutDemo}/>
          <Route path="/dialog" component={DialogDemo}/>
        </Main>
      </Layout>
    </Layout>
  </Router>
  , document.querySelector('#root'));