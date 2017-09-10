import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';
import ForecastsList from '../containers/ForecastsList';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ForecastsList />
      </div>
    );
  }
}
