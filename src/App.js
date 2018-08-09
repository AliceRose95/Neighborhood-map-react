import React, { Component } from 'react';
import './App.css';
import List from './SidebarList.js';
import placeInfo from './places.json'
import escapeRegExp from 'escape-string-regexp';
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

// Function for opening the infowindow of each marker
  onToggleOpen = (id, toggle) => {
    this.setState({
      markerId: id,
      toggle
    });
  }

// Search function for list sidebar and map markers
  searchHandler = (query) => {
    const { places } = this.state;
    const match = new RegExp(escapeRegExp(query), 'i')
    this.setState({
      displayedPlaces: this.state.places.filter((place) => match.test(place.name))
    })
  }

  onMapClick = e => {
    e.stopPropagation();
    this.props.onClick;
  }

// Function for toggling the list menu open or closed
  toggleMenu = () => {
    const sidebar = document.querySelector('.sidebar');
    if(sidebar.style.display === 'none') {
      sidebar.style.display = 'block'
    } else {
    sidebar.style.display = 'none';
    }
  }


  render() {
    return (
      <div className="App">
        <div>

          <header>
            <div onClick={this.toggleMenu} onKeyPress={this.toggleMenu} tabIndex="0"><i className="fas fa-bars" id="hamburger"></i></div>
            <h1>Readings Best Bars Map</h1>
          </header>

          <div className="sidebar" style={{ display: `none` }}>
            <List
              onToggleOpen={this.onToggleOpen}
              states={this.state}
              searchHandler={this.searchHandler}
              displayedPlaces={this.state.displayedPlaces}
              toggleList={this.toggleList}
            />
          </div>

        <div id="map-container" role="application" tabIndex="-1">
          <Map
            places={this.state.places}
            onToggleOpen={this.onToggleOpen}
            markerId={this.state.markerId}
            toggle={this.state.toggle}
            displayedPlaces={this.state.displayedPlaces}
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCj9wwQEOPRL67fzUS2F7Kod97Gok6ggVE"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={ <div style={{ height: `100%`, width: `100%` }} /> }
            mapElement={ <div style={{ height: `100vh` }} /> }
            onClick={this.onMapClick}
          />
        </div>

       </div>
      </div>
    );
  }
}

export default App;
