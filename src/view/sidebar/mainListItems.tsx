import * as React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Add, Clear, Dashboard} from '@material-ui/icons';
import {SidebarItem} from './SidebarItem';

const items: SidebarItem[] = [
  {
    icon: <Dashboard/>,
    text: 'View animals',
  },
  {
    icon: <Add/>,
    text: 'Add animal',
  },
  {
    icon: <Clear/>,
    text: 'Remove animal',
  },
];

const mainListItems = (
  <React.Fragment>
    {items.map((item, index) => (
      <ListItem button key={index}>
        <ListItemIcon>
          {item.icon}
        </ListItemIcon>
        <ListItemText primary={item.text}/>
      </ListItem>
    ))}
  </React.Fragment>
);

export {mainListItems};
