import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import OrderedList from './list/OrderedList';

const container = document.getElementById('root');
const element = (
  <Dashboard>
    <OrderedList />
  </Dashboard>
);

ReactDOM.render(element, container);
