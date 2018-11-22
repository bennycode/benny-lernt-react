import * as React from 'react';
import axios from 'axios';
import ListItem from "./ListItem";

interface Props {
  items: string[]
}

interface State {
  items: string[]
}

class OrderedList extends React.Component<Props, State> {
  static defaultProps = {
    items: []
  };

  constructor(props: { items: string[] }) {
    super(props);
    this.state = {
      items: props.items
    };
  }

  async componentDidMount() {
    const response = await axios.get('/rest/animals');
    const newItems = {
      items: response.data
    };
    this.setState((prevState) => {
      return {...prevState, ...newItems};
    });
  }

  render() {
    return (
      <ol>
        {this.state.items.map((item, index) => <ListItem key={index} text={item}/>)}
      </ol>
    );
  }
}

export default OrderedList;


