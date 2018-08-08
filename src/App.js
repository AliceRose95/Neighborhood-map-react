import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './SidebarList.js';
import placeInfo from './places.json'
import Map from './Map.js';

class App extends Component {
  state = {
    places: [],
    displayedPlaces: [],
    markerId: false,
    toggle: '',
    query: ''
  }

  componentDidMount() {
     this.setState({
       places: placeInfo,
       displayedPlaces: placeInfo,
     });
   }

  onToggleOpen = (id, toggle) => {
    this.setState({
      markerId: id,
      toggle
    });
  }


  render() {
    return (
      <div className="App">
        <div>
          <header>
            <h1>Readings Best Bars Map</h1>
          </header>
          <div className="sidebar">
            <List
              onToggleOpen={this.onToggleOpen}
              states={this.state}
            />
        </div>
        <Map
          places={this.state.places}
          onToggleOpen={this.onToggleOpen}
          markerId={this.state.markerId}
          toggle={this.state.toggle}
          showedPlaces={this.state.displayedPlaces}
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCj9wwQEOPRL67fzUS2F7Kod97Gok6ggVE"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={ <div style={{ height: `100%`, width: `100%` }} /> }
          mapElement={ <div style={{ height: `100vh` }} /> }
        />
        </div>
      </div>
    );
  }
}

export default App;
