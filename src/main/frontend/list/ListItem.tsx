import * as React from "react";

interface Props {
  text: string
}

class ListItem extends React.Component<Props> {
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
