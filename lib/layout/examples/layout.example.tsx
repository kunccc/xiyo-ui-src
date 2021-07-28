import React from 'react';
import Layout from '../Layout';
import Header from '../components/Header';
import Main from '../components/Main';
import Aside from '../components/Aside';
import Footer from '../components/Footer';

const LayoutExample: React.FC = () => {
  return (
    <div className="layout-example">

      <Layout className="layout">
        <Header className="header">header</Header>
        <Main className="main">main</Main>
        <Footer className="footer">footer</Footer>
      </Layout>

      <Layout className="layout">
        <Header className="header">header</Header>
        <Layout>
          <Aside className="aside">aside</Aside>
          <Main className="main">main</Main>
        </Layout>
        <Footer className="footer">footer</Footer>
      </Layout>

      <Layout className="layout">
        <Header className="header">header</Header>
        <Layout>
          <Main className="main">main</Main>
          <Aside className="aside">aside</Aside>
        </Layout>
        <Footer className="footer">footer</Footer>
      </Layout>

      <Layout className="layout">
        <Aside className="aside">aside</Aside>
        <Layout>
          <Header className="header">header</Header>
          <Main className="main">main</Main>
          <Footer className="footer">footer</Footer>
        </Layout>
      </Layout>

    </div>
  );
};

export default LayoutExample;