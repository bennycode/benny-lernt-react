import React, {Component, Fragment} from 'react';

class App extends Component {
  constructor() {
    super();
    this.text = 'Hello, World!';
  }

  render() {
    return (
      <Fragment>
        <p key={1}>{this.text}</p>
        <p key={2}>{this.text}</p>
      </Fragment>
    );
  }
}

export default App;
