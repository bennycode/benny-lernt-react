import * as PropTypes from 'prop-types';
import * as React from 'react';

class App extends React.Component<{}> {
  private text: string;

  constructor(props: Object) {
    super(props);
    this.text = 'Hello, World!';
  }

  render() {
    return (
      <>
        <p>{this.text}</p>
        <Paragraph myTexts={['1337']}/>
      </>
    );
  }
}

class Paragraph extends React.Component<{ myTexts: string[] }, { myTexts: string[] }> {
  static defaultProps = {
    myTexts: ['This is a default text.']
  };

  static propTypes = {
    myTexts: PropTypes.arrayOf(PropTypes.string),
  };

  constructor(props: { myTexts: string[] }) {
    super(props);

    this.state = {
      myTexts: []
    };
  }

  componentDidMount() {
    this.setState((prevState, props) => {
      return {...prevState, ...props};
    });
  }

  render() {
    return (
      <>{this.state.myTexts.map(myText => <p key={myText}>{myText}</p>)}</>
    );
  }
}

export default App;
