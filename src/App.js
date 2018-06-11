import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Converter from './components/Converter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Converter />
      </div>
    );
  }
}

export default App;
