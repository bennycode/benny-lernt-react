import * as React from 'react';
import * as ReactDOM from 'react-dom';
import OrderedList from './list/OrderedList';
import {Button, Typography} from '@material-ui/core';

const root = document.getElementById('root');
ReactDOM.render(
  <React.Fragment>
    <Typography component="h2" variant="headline">
      Animals
    </Typography>
    <Button color="primary" variant="outlined">
      <a href={'/documentation'} style={{textDecoration: 'none'}} target={'_blank'} rel='noopener'>Create animal</a>
    </Button>
    <OrderedList/>
  </React.Fragment>
  , root);
