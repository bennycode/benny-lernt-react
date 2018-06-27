import React from 'react';
import ReactDOM from 'react-dom';
import {OrderedList} from './OrderedList';

const animals = ['Alligator', 'Bat', 'Chicken', 'Dolphin', 'Eagle', 'Flamingo', 'Guppy', 'Hedgehog', 'Iguana', 'Jaguar', 'Koala', 'Lion', 'Monkey', 'Narwhal', 'Owl', 'Peacock', 'Queen Bee', 'Rat', 'Sheep', 'Turtle', 'Unicorn', 'Vulture', 'Whale', 'Xantus', 'Yorkshire Terrier', 'Zebra'];
const container = document.getElementById('app');
const component = ReactDOM.render(<OrderedList items={animals}/>, container);
component.addItem('Chameleon');
