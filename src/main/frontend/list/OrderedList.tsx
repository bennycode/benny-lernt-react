import * as React from 'react';
import axios from 'axios';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
      <List dense={false}>
        {this.state.items.map((item, index) =>
          <ListItem key={index}>
            <ListItemText
              primary={item}
            />
          </ListItem>)
        }
      </List>
    );
  }
}

export default OrderedList;


