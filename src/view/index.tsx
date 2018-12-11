import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import PermanentDrawerLeft from "./PermanentDrawerLeft";

const root = document.getElementById('root');
ReactDOM.render(
  <Dashboard>
    <PermanentDrawerLeft />
  </Dashboard>, root);
