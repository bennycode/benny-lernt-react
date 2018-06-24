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
        <Paragraph myText={'Hello, Mars!'}/>
      </>
    );
  }
}

const Paragraph = (props) => <p>{props.myText}</p>;

export default App;
