import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {PermContactCalendar} from '@material-ui/icons';
import * as React from 'react';
import {SidebarItem} from './SidebarItem';

const items: SidebarItem[] = [
  {
    icon: <PermContactCalendar />,
    text: 'Imprint',
  },
];

const secondaryListItems = (
  <React.Fragment>
    {items.map((item, index) => (
      <ListItem button key={index}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.text} />
      </ListItem>
    ))}
  </React.Fragment>
);

export {secondaryListItems};
