import * as React from 'react';
import AnimalResource from '../../animal/AnimalResource';
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

  async componentDidMount() {
    const animals = await AnimalResource.getAnimals();
    this.setState({
      animals: animals.map((animal) => animal.name)
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
