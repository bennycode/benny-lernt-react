import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import OrderedList from './list/OrderedList';

const root = document.getElementById('root');
ReactDOM.render(
  <Dashboard>
    <OrderedList/>
  </Dashboard>, root);
