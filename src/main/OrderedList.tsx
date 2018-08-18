import * as React from 'react';

class OrderedList extends React.Component<{ items: string[] }, { items: string[] }> {
  static defaultProps = {
    items: []
  };

  constructor(props: { items: string[] }) {
    super(props);
    this.state = {
      items: props.items
    };
  }

  addItem(item: string) {
    let {items} = this.state;
    items.push(item);
    items.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    this.setState({
      items
    });
  }

  render() {
    return (
      <ol>
        {this.props.items.map((item, index) => <ListItem key={index} text={item}/>)}
      </ol>
    );
  }
}


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

export {OrderedList, ListItem};
