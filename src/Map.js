import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap} from 'react-google-maps';
import MarkersInfo from './MarkersInfo.js';
import placeInfo from './places.json';

//Import the information of the places from the array in the JSON file
const places = placeInfo;

const Map = withScriptjs(withGoogleMap((props) =>

    <GoogleMap
      defaultCenter = { { lat: 51.454741, lng: -0.972664 } }
      defaultZoom = { 17 }
    >

    {
    props.displayedPlaces.length === 0 ?
      places.map(place => (
      <MarkersInfo
        key={place.id}
        placeId={place.id}
        placeTitle={place.name}
        onToggleOpen={props.onToggleOpen}
        toggle={props.toggle}
        markerId={props.markerId}
        tabIndex="0"
      />
      ))
      :
      props.displayedPlaces.map(place => (
        <MarkersInfo
          key={place.id}
          placeId={place.id}
          placePosition={{lat: place.position.latitude, lng: place.position.longitude }}
          placeTitle={place.name}
          onToggleOpen={props.onToggleOpen}
          toggle={props.toggle}
          markerId={props.markerId}
          tabIndex="0"
        />
      ))
    }
    </GoogleMap>
  ));



export default Map;
