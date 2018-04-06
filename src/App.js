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
  constructor(props) {
    super(props);
    this.filterSearchTerm = this.filterSearchTerm.bind(this);
  }

  filterSearchTerm(country) {
    let lowerCase = country.name.toLowerCase();
    if (lowerCase.indexOf(this.props.searchText) === -1) {
      return false;
    }
    return true;
  }

  render() {
    const { countries } = this.props;

    return (
      <table>
        <thead>
          <tr>
            <th align="left">Country</th>
            <th>Code</th>
          </tr>
        </thead>
        <tbody>
          {countries
            .filter(this.filterSearchTerm)
            .map(country => (
              <CountryRow
                name={country.name}
                code={country.code}
                key={country.name}
              />
            ))}
        </tbody>
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
