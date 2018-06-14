import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DistanceConverter from './components/DistanceConverter';
import TempConverter from './components/TempConverter';
import WeightConverter from './components/WeightConverter';
import VolumeConverter from './components/VolumeConverter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="header1">Aviation Data Converter</h1>
        <DistanceConverter />
        <TempConverter />
        <WeightConverter />
        <VolumeConverter />
      </div>
    );
  }
}

export default App;
