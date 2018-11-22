import * as React from "react";

class ListItem extends React.Component<{ text: string }> {
  static defaultProps = {
    text: ''
  };

  constructor(props: { text: string }) {
    super(props);
  }

  render() {
    return <li>{this.props.text}</li>;
  }
}

export default ListItem;
