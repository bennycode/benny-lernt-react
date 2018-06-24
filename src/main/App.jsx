import React, {Component} from 'react';

class App extends Component {
  constructor() {
    super();
    this.text = 'Hello, World!';
  }

  render() {
    return (
      <>
        <p>{this.text}</p>
        <Paragraph myTexts={['Hello, Mars!', 'Hello, Moon!']}/>
      </>
    );
  }
}

class Paragraph extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>{this.props.myTexts.map(myText => <p key={myText}>{myText}</p>)}</>
    );
  }
}

export default App;
