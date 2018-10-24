import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {OrderedList} from './OrderedList';

const root = document.getElementById('root');
ReactDOM.render<OrderedList>(<OrderedList/>, root);
