import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {OrderedList} from './OrderedList';

const container = document.getElementById('root');
ReactDOM.render<OrderedList>(<OrderedList/>, container);
