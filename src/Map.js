import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, withScriptjs } from 'react-google-maps';

class Map extends Component {
  state = {
    places: [
      {
        "name": "Las Iguanas",
        "position": {
        "latitude": 51.452662,
        "longitude": -0.970905
      }
      },
      {
        "name": "Slug and Lettuce",
        "position": {
        "latitude": 51.453590,
        "longitude": -0.970821
      }
      },
      {
        "name": "The Purple Turtle",
        "position": {
        "latitude": 51.453983,
        "longitude": -0.972965
      }
      },
      {
        "name": "All Bar One",
        "position": {
        "latitude": 51.453510,
        "longitude": -0.970925
      }
      },
      {
        "name": "The Beach Bar",
        "position": {
        "latitude": 51.453005,
        "longitude": -0.970821
      }
      },
      {
        "name": "The Pavlovs Dog",
          "position": {
            "latitude": 51.454391,
            "longitude": -0.974740
      }
    }
  ],
}


  render(){
    const MapWithMarkers = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 51.453004, lng: -0.970946 } }
        defaultZoom = { 17 }
      >
      {this.state.places.map((place, index) => (
      <Marker
          key={place.name}
          position={{ lat: place.position.latitude, lng: place.position.longitude }}
          title={place.name}
      >
      </Marker>
      ))}
      </GoogleMap>
   ));


   return(
      <div>
        <header>
        <h1>Readings Best Bars Map</h1>
        </header>
        <MapWithMarkers
          containerElement={ <div style={{ height: `100%`, width: `100%` }} /> }
          mapElement={ <div style={{ height: `100vh` }} /> }
        />

      </div>
   );
   }
};
export default Map;
