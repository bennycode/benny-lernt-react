import * as React from 'react';
import * as ReactDOM from 'react-dom';
import OrderedList from './list/OrderedList';
import Typography from '@material-ui/core/Typography';

const root = document.getElementById('root');
ReactDOM.render(
  <React.Fragment>
    <Typography component="h2" variant="headline">
      Animals
    </Typography>
    <OrderedList/>
  </React.Fragment>
  , root);
