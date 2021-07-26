import React from 'react';
import Layout from './Layout';
import Header from './components/Header';
import Main from './components/Main';
import Aside from './components/Aside';
import Footer from './components/Footer';
import './layout.example.scss';

const LayoutExample: React.FC = () => {
  return (
    <>
      <h2>示例1</h2>
      <Layout className="layout">
        <Header className="header">header</Header>
        <Main className="main">main</Main>
        <Footer className="footer">footer</Footer>
      </Layout>
      <h2>示例2</h2>
      <Layout className="layout">
        <Header className="header">header</Header>
        <Layout>
          <Aside className="aside">aside</Aside>
          <Main className="main">main</Main>
        </Layout>
        <Footer className="footer">footer</Footer>
      </Layout>
      <h2>示例3</h2>
      <Layout className="layout">
        <Header className="header">header</Header>
        <Layout>
          <Main className="main">main</Main>
          <Aside className="aside">aside</Aside>
        </Layout>
        <Footer className="footer">footer</Footer>
      </Layout>
      <h2>示例4</h2>
      <Layout className="layout">
        <Aside className="aside">aside</Aside>
        <Layout>
          <Header className="header">header</Header>
          <Main className="main">main</Main>
          <Footer className="footer">footer</Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default LayoutExample;