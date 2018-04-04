import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
  }

  handleSearchTextChange(e) {
    this.props.onSearchTextChange(e.target.value);
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.searchText}
          onChange={this.handleSearchTextChange}
        />
      </form>
    );
  }
}

class CountryTable extends Component {
  render() {
    const searchText = this.props.searchText;
    const rows = [];

    this.props.countries.forEach(country => {
      let lowerCase = country.name.toLowerCase();
      if (lowerCase.indexOf(searchText) === -1) {
        return;
      }
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
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    };

    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
  }
  handleSearchTextChange(searchText) {
    this.setState({
      searchText: searchText
    });
  }
  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.handleSearchTextChange}
        />
        <br />
        <CountryTable
          countries={this.props.countries}
          searchText={this.state.searchText}
        />
      </div>
    );
  }
}
