import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {OrderedList} from './OrderedList';

const container = document.getElementById('app');
ReactDOM.render<OrderedList>(<OrderedList/>, container);
