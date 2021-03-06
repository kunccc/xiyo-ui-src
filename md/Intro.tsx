import React from 'react';

const Intro: React.FC = () => {
  return (
    <div className="markdown-body">
      <h1>介绍</h1>
      <p>Xiyo UI (西柚) 是一款基于 React 和 TypeScript 的 UI 组件库。主题风格特色鲜明，各个组件代码也十分简洁。</p>
      <p>
        该组件库是本人总结学习 React 的技术经验而写，包括这个官网，因此不推荐您将此组件库应用于生产环境。适配器模式经过精心设计，您可以在移动端和 PC 端进行浏览。如果您对其中技术点感兴趣，欢迎进入我的
        <a href="https://github.com/kunccc/xiyo-ui-src" target="_blank"> GitHub 仓库 </a>
        阅读源代码，commits 信息规范，您可以根据提交的顺序进行查看。
      </p>
      <p><a href="http://kuncc.gitee.io/xiyo-ui-website" target="_blank">Vue3 版本</a> 的 Xiyo UI 已更新，欢迎查看。</p>
      <p>下一节：<a href="#/install">安装</a></p>
    </div>
  );
};

export default Intro;