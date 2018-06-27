import React from 'react';

class OrderedList extends React.Component {
  static defaultProps = {
    items: []
  };

  constructor(props) {
    super(props);
    this.state = {
      items: props.items
    };
  }

  addItem(item) {
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


class ListItem extends React.Component {
  static defaultProps = {
    text: ''
  };

  constructor(props) {
    super(props);
  }

  render() {
    return <li>{this.props.text}</li>;
  }
}

export {OrderedList, ListItem};
