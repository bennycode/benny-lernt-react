import React from 'react';

const App = () => <div className={'OuterWrapper'}>
  <div className='InnerWrapper'>
    <Paragraph/>
    {Paragraph()}
  </div>
</div>;

const Paragraph = () => <p>Hello, World!</p>;

export default App;
