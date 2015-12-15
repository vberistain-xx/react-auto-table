require('styles/App.css');

import React from 'react';


class AutoTable extends React.Component {
  render() {
    const renderHead = (key) => {
      return (
        <th data-field={key}>{key}</th>
      )
    }
    const renderRow = (row) => {
      return (
        <tr>
          {Object.keys(row).map(function(key) {
            return (
              <td>{row[key]}</td>
            )
          })}
        </tr>
      );
    }
    return (
      <table className="striped">
        <thead>
          <tr>
            {Object.keys(this.props.data[0]).map(renderHead)}
          </tr>
        </thead>
        <tbody>
          {this.props.data.map(renderRow)}
        </tbody>
      </table>
    );
  }
}

export default AutoTable;
