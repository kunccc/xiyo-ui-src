import React from 'react';
import Demo from '../../Demo';
import DialogExample1 from './examples/dialog.example1';
import DialogExample2 from './examples/dialog.example2';
import DialogExample3 from './examples/dialog.example3';
import DialogExample4 from './examples/dialog.example4';
import DialogExample5 from './examples/dialog.example5';

const DialogDemo: React.FC = () => {
  return (
    <>
      <Demo code={require('!!raw-loader!./examples/dialog.example1').default}><DialogExample1/></Demo>
      <Demo code={require('!!raw-loader!./examples/dialog.example2').default}><DialogExample2/></Demo>
      <Demo code={require('!!raw-loader!./examples/dialog.example3').default}><DialogExample3/></Demo>
      <Demo code={require('!!raw-loader!./examples/dialog.example4').default}><DialogExample4/></Demo>
      <Demo code={require('!!raw-loader!./examples/dialog.example5').default}><DialogExample5/></Demo>
    </>
  );
};

export default DialogDemo;