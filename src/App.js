import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './SidebarList.js';
import Map from './Map.js';

class App extends Component {


  render() {
    return (
      <div className="App">
      <div>
        <header>
        <h1>Readings Best Bars Map</h1>
        </header>
        <div className="sidebar">
        <List/>
        </div>
        <Map/>
        </div>
      </div>
    );
  }
}

export default App;
