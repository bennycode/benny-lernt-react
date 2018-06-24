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

    this.state = {
      myTexts: []
    };
  }

  componentDidMount() {
    let {myTexts} = this.state;

    myTexts = myTexts.concat(this.props.myTexts);

    this.setState({
      myTexts
    });
  }

  render() {
    return (
      <>{this.state.myTexts.map(myText => <p key={myText}>{myText}</p>)}</>
    );
  }
}

export default App;
