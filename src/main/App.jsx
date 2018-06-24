import PropTypes from 'prop-types';
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
        <Paragraph myTexts={[1337]}/>
      </>
    );
  }
}

class Paragraph extends Component {
  static defaultProps = {
    myTexts: ['This is a default text.']
  };

  static propTypes = {
    myTexts: PropTypes.arrayOf(PropTypes.string),
  };

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

export default App;
