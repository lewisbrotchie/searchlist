import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
      </form>
    );
  }
}

class CountryTable extends Component {
  render() {
    const rows = [];

    this.props.countries.forEach(country => {
      rows.push(
        <CountryRow
          name={country.name}
          code={country.code}
          key={country.name}
        />
      );
    });
    return (
      <table>
        <thead>
          <tr>
            <th align="left">Country</th>
            <th>Code</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class CountryRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.code}</td>
      </tr>
    );
  }
}

export default class FilterableSearchList extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <br />
        <CountryTable countries={this.props.countries} />
      </div>
    );
  }
}
