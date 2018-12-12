import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PermanentDrawerLeft from "./PermanentDrawerLeft";
import OrderedList from "./list/OrderedList";

const container = document.getElementById('root');
const element = (
  <PermanentDrawerLeft>
    <OrderedList/>
  </PermanentDrawerLeft>
);

ReactDOM.render(element, container);
