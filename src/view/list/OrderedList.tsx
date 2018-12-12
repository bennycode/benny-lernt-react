import * as React from 'react';
import AnimalEntity from '../../animal/AnimalEntity';
import AnimalResource from '../../animal/AnimalResource';
import {List, ListItem, ListItemText} from '@material-ui/core';

interface State {
  animals: AnimalEntity[]
}

class OrderedList extends React.Component<{}, State> {
  state: State = {
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
        {
          this.state.animals
            .sort((a: AnimalEntity, b: AnimalEntity) => {
              return a.name.localeCompare(b.name);
            })
            .map((animal: AnimalEntity, index: number) =>
              <ListItem key={index}>
                <ListItemText
                  primary={`${index} \u2014 ${animal.name}`}
                />
              </ListItem>)
        }
      </List>
    );
  }
}

export default OrderedList;
