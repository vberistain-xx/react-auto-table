/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
import React from 'react/addons';
const TestUtils = React.addons.TestUtils;

import AutoTable from 'components/AutoTable';

describe('AutoTable', () => {
  var table, rows;
  let array = [ 
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
  beforeEach(() => {
    var renderedComponent = TestUtils.renderIntoDocument(
      <AutoTable data={array} />
    );
    table = TestUtils.findRenderedDOMComponentWithTag(
      renderedComponent,
      'table'
    );
    rows = TestUtils.scryRenderedDOMComponentsWithTag(
      renderedComponent,
      'tr'
    )
  });

  it('should create a table', () => {
    expect(table).to.be.defined;
  });
  it('should have the same number of columns as properties on the array', () => {
    let numberOfColums = rows[1].childNodes.length;
    expect(numberOfColums).to.equal(Object.keys(array[0]).length);
  });
  it('should have the same number of rows as length of the array', () => {
    let numberOfRows = rows.length -1; //-1 for the table head
    expect(numberOfRows).to.equal(array.length);
  });
});
