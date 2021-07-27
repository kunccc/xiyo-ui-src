import React from 'react';
import Demo from '../../Demo';
import ButtonExample1 from './examples/button.example1';
import ButtonExample2 from './examples/button.example2';
import ButtonExample3 from './examples/button.example3';
import ButtonExample4 from './examples/button.example4';
import ButtonExample5 from './examples/button.example5';
import ButtonExample6 from './examples/button.example6';

const ButtonDemo: React.FC = () => {
  return (
    <>
      <Demo code={require('!!raw-loader!./examples/button.example1').default}><ButtonExample1/></Demo>
      <Demo code={require('!!raw-loader!./examples/button.example2').default}><ButtonExample2/></Demo>
      <Demo code={require('!!raw-loader!./examples/button.example3').default}><ButtonExample3/></Demo>
      <Demo code={require('!!raw-loader!./examples/button.example4').default}><ButtonExample4/></Demo>
      <Demo code={require('!!raw-loader!./examples/button.example5').default}><ButtonExample5/></Demo>
      <Demo code={require('!!raw-loader!./examples/button.example6').default}><ButtonExample6/></Demo>
    </>
  );
};

export default ButtonDemo;