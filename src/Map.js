import React, { Component } from 'react';
import { getLocations } from './foursquareAPI';
import { withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
import MarkersInfo from './MarkersInfo.js';
import placeInfo from './places.json';

const places = placeInfo;

  const Map = withScriptjs(withGoogleMap((props) =>

    <GoogleMap
      defaultCenter = { { lat: 51.453004, lng: -0.970946 } }
      defaultZoom = { 17 }
    >

    {
      places.map((place, id) => (
      <MarkersInfo
        key={place.id}
        placeId={place.id}
        placePosition={{lat: place.position.latitude, lng: place.position.longitude }}
        placeTitle={place.name}
        onToggleOpen={props.onToggleOpen}
        toggle={props.toggle}
        markerId={props.markerId}
      />
      ))}
    </GoogleMap>
  ));

export default Map;
