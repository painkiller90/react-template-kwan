import React, { Component } from 'react';
import './app.css';

export default class componentName extends Component {

  getRows = () => {
    const { data } = this.props;
    return data.map((row) => (
      <tr key={row.id}>
        {row.values.map((values, index) => (
          <td key={index}>{values}</td>
        ))}
      </tr>
    ));
  }

  render() {
    return (
      <table className="react-table">
        <tbody>
          {this.getRows()}
        </tbody>
      </table>
    );
  }
}
