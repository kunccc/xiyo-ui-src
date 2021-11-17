import * as React from 'react';
import BackTop from '../BackTop';

const backTopExample: React.FC = () => {
  return (
    <div>
      <p>往下滚动即可在右下方看到返回顶部按钮</p>
      <BackTop/>
    </div>
  );
};

export default backTopExample;