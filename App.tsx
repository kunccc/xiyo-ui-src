import * as React from 'react';
import {useState} from 'react';
import {HashRouter as Router, Route, NavLink, Redirect, Switch} from 'react-router-dom';
import IconDemo from './lib/icon/icon.demo';
import DialogDemo from './lib/dialog/dialog.demo';
import ButtonDemo from './lib/button/button.demo';
import LayoutDemo from './lib/layout/layout.demo';
import BackTopDemo from './lib/backTop/backTop.demo';
import Layout from './lib/layout/Layout';
import Header from './lib/layout/components/Header';
import Aside from './lib/layout/components/Aside';
import Main from './lib/layout/components/Main';
import Intro from './lib/doc/Intro';
import Install from './lib/doc/Install';
import Start from './lib/doc/Start';
import Icon from './lib/icon/Icon';
import BackTop from './lib/backTop/BackTop';
import './index.scss';
import 'github-markdown-css';

const logo = require('./logo.png').default;
const xiyo = require('./xiyo.png').default;

const App: React.FC = () => {
  const [asideVisible, setAsideVisible] = useState(false);
  return (
    <Router>
      <Layout className={`site ${asideVisible ? 'visible' : ''}`.trim()}>
        <Header className="site-header">
          <Icon className={`menu ${asideVisible ? 'visible' : ''}`.trim()} name="menu"
                onClick={() => setAsideVisible(v => !v)}/>
          <img className="logo" src={logo} alt=""/>
          <img className="xiyo" src={xiyo} alt=""/>
        </Header>
        <Layout>
          <Aside className={`site-aside ${asideVisible ? 'visible' : ''}`.trim()}>
            <p className="site-aside-title">文档</p>
            <ul>
              <li>
                <NavLink to="/intro" onClick={() => setAsideVisible(false)}>介绍</NavLink>
              </li>
              <li>
                <NavLink to="/install" onClick={() => setAsideVisible(false)}>安装</NavLink>
              </li>
              <li>
                <NavLink to="/start" onClick={() => setAsideVisible(false)}>开始使用</NavLink>
              </li>
            </ul>
            <p className="site-aside-title">组件列表</p>
            <ul>
              <li>
                <NavLink to="/icon" onClick={() => setAsideVisible(false)}>Icon 图标</NavLink>
              </li>
              <li>
                <NavLink to="/button" onClick={() => setAsideVisible(false)}>Button 按钮</NavLink>
              </li>
              <li>
                <NavLink to="/layout" onClick={() => setAsideVisible(false)}>Layout 布局</NavLink>
              </li>
              <li>
                <NavLink to="/dialog" onClick={() => setAsideVisible(false)}>Dialog 对话框</NavLink>
              </li>
              <li>
                <NavLink to="/backTop" onClick={() => setAsideVisible(false)}>BackTop 返回顶部</NavLink>
              </li>
            </ul>
          </Aside>
          <Main className={`site-main ${asideVisible ? 'visible' : ''}`.trim()}>
            <div className={`mask ${asideVisible ? 'visible' : ''}`.trim()} onClick={() => setAsideVisible(false)}/>
            <Switch>
              <Route path="/intro" component={Intro}/>
              <Route path="/install" component={Install}/>
              <Route path="/start" component={Start}/>
              <Route path="/icon" component={IconDemo}/>
              <Route path="/button" component={ButtonDemo}/>
              <Route path="/layout" component={LayoutDemo}/>
              <Route path="/dialog" component={DialogDemo}/>
              <Route path="/backTop" component={BackTopDemo}/>
              <Redirect exact from="" to="/intro"/>
            </Switch>
          </Main>
        </Layout>
        <BackTop/>
      </Layout>
    </Router>
  );
};
export default App;