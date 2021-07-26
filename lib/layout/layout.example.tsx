import React from 'react';
import Layout from './Layout';
import Header from './components/Header';
import Main from './components/Main';
import Aside from './components/Aside';
import Footer from './components/Footer';

const LayoutExample: React.FC = () => {
  return (
    <>
      <h2>示例1</h2>
      <Layout>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </Layout>
      <h2>示例2</h2>
      <Layout>
        <Header></Header>
        <Layout>
          <Aside></Aside>
          <Main></Main>
        </Layout>
        <Footer></Footer>
      </Layout>
      <h2>示例3</h2>
      <Layout>
        <Header></Header>
        <Layout>
          <Main></Main>
          <Aside></Aside>
        </Layout>
        <Footer></Footer>
      </Layout>
      <h2>示例4</h2>
      <Layout>
        <Aside></Aside>
        <Layout>
          <Header></Header>
          <Main></Main>
          <Footer></Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default LayoutExample;