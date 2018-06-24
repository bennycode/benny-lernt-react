import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.text = 'Hello, World!';
  }

  render() {
    return (<div className='Wrapper'>
      <p>{this.text}</p>
    </div>);
  }
}

export default App;
