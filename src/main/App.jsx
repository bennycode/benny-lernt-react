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
        <Paragraph/>
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
    this.setState({
      ...this.state,
      ...this.props
    });
  }

  render() {
    return (
      <>{this.state.myTexts.map(myText => <p key={myText}>{myText}</p>)}</>
    );
  }
}

Paragraph.defaultProps = {
  myTexts: ['This is a default text.']
};

export default App;
