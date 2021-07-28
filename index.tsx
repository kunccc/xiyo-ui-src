import * as React from 'react';
import * as  ReactDOM from 'react-dom';
import {HashRouter as Router, Route, NavLink, Redirect, Switch} from 'react-router-dom';
import IconDemo from './lib/icon/icon.demo';
import DialogDemo from './lib/dialog/dialog.demo';
import ButtonDemo from './lib/button/button.demo';
import LayoutDemo from './lib/layout/layout.demo';
import Layout from './lib/layout/Layout';
import Header from './lib/layout/components/Header';
import Aside from './lib/layout/components/Aside';
import Main from './lib/layout/components/Main';
import Intro from './lib/doc/Intro';
import Install from './lib/doc/Install';
import Start from './lib/doc/Start';
import './index.scss';
import 'github-markdown-css';

ReactDOM.render(
  <Router>
    <Layout className="site">
      <Header className="site-header">
        <img className="logo" src="./logo.png" alt=""/>
        <img className="xiyo" src="./xiyo.png" alt=""/>
      </Header>
      <Layout>
        <Aside className="site-aside">
          <p className="site-aside-title">文档</p>
          <ul>
            <li>
              <NavLink to="/intro">介绍</NavLink>
            </li>
            <li>
              <NavLink to="/install">安装</NavLink>
            </li>
            <li>
              <NavLink to="/start">开始使用</NavLink>
            </li>
          </ul>
          <p className="site-aside-title">组件列表</p>
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
          <Switch>
            <Route path="/intro" component={Intro}/>
            <Route path="/install" component={Install}/>
            <Route path="/start" component={Start}/>
            <Route path="/icon" component={IconDemo}/>
            <Route path="/button" component={ButtonDemo}/>
            <Route path="/layout" component={LayoutDemo}/>
            <Route path="/dialog" component={DialogDemo}/>
            <Redirect exact from="" to="/intro"/>
          </Switch>
        </Main>
      </Layout>
    </Layout>
  </Router>
  , document.querySelector('#root'));