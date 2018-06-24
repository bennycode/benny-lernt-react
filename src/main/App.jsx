import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.text = 'Hello, World!';
  }

  render() {
    return [
      <p key={1}>{this.text}</p>,
      <p key={2}>{this.text}</p>
    ];
  }
}

export default App;
