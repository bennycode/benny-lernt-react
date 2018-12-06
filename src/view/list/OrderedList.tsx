import * as React from 'react';
import AnimalEntity from '../../animal/AnimalEntity';
import AnimalResource from '../../animal/AnimalResource';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

interface State {
  animals: AnimalEntity[]
}

class OrderedList extends React.Component<{}, State> {
  state = {
    animals: []
  };

  async componentDidMount() {
    const animals = await AnimalResource.getAnimals();
    this.setState({
      animals,
    });
  }

  render() {
    return (
      <List dense={false}>
        {this.state.animals.map((animal: AnimalEntity, index: number) =>
          <ListItem key={index}>
            <ListItemText
              primary={animal.name}
            />
          </ListItem>)
        }
      </List>
    );
  }
}

export default OrderedList;
