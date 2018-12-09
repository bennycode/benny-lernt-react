import * as React from 'react';
import {
  AppBar,
  Badge,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {List} from '@material-ui/icons';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import InboxIcon from '@material-ui/icons/MoveToInbox';

const classNames = require('classnames');

interface Props {
}

interface State {
  open: boolean;
}

const drawerWidth = 240;

const classes = {
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
  },
  appBar: {},
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
  },
  drawerPaperClose: {
    overflowX: 'hidden',
  },
  appBarSpacer: {},
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  chartContainer: {
    marginLeft: -22,
  },
  tableContainer: {
    height: 320,
  },
};

class Dashboard extends React.Component<Props, State> {
  state: State = {
    open: true
  };

  handleDrawerOpen = () => {
    this.setState({open: true});
  };

  handleDrawerClose = () => {
    this.setState({open: false});
  };

  render() {
    return (
      <div>
        <CssBaseline/>
        <AppBar
          position="absolute"
          className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
        >
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(
                classes.menuButton,
                this.state.open && classes.menuButtonHidden,
              )}
            >
              <MenuIcon/>
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
            >
              Dashboard
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon/>
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.state.open}
        >
          <div>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon/>
            </IconButton>
          </div>
          <Divider/>
          <List>
            <ListItem button key={'Inbox'}>
              <ListItemIcon>
                <InboxIcon/>
              </ListItemIcon>
              <ListItemText primary={'Inbox'}/>
            </ListItem>
          </List>
          <Divider/>
        </Drawer>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default Dashboard;
