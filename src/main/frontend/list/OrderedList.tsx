import * as React from 'react';
import axios from 'axios';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

interface State {
  animals: string[]
}

class OrderedList extends React.Component<{}, State> {
  state = {
    animals: []
  };

  private async getAnimals(): Promise<string[]> {
    const response = await axios.get('/rest/animals');
    return response.data;
  }

  async componentDidMount() {
    this.setState({
      animals: await this.getAnimals()
    });
  }

  render() {
    return (
      <List dense={false}>
        {this.state.animals.map((animalName, index) =>
          <ListItem key={index}>
            <ListItemText
              primary={animalName}
            />
          </ListItem>)
        }
      </List>
    );
  }
}

export default OrderedList;


