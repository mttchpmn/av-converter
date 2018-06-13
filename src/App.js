import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DistanceConverter from './components/DistanceConverter';
import TempConverter from './components/TempConverter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="header1">Aviation Converter</h1>
        <DistanceConverter />
        <TempConverter />
        <DistanceConverter />
        <TempConverter />
      </div>
    );
  }
}

export default App;
