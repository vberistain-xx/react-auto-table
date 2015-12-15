import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import AutoTable from './AutoTable';

var array = [ 
  {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
  },
  {
    key1: 'value11',
    key2: 'value22',
    key3: 'value33'
  },
  {
    key1: 'value21',
    key2: 'value22',
    key3: 'value23'
  },
  {
    key1: 'value31',
    key2: 'value32',
    key3: 'value33'
  },
]

// Render the main component into the dom
ReactDOM.render(<AutoTable data={array}/>, document.getElementById('app'));
