import React, { Component } from 'react';
import { compose, withProps, withStateHandlers } from 'recompose';
import { getLocations } from './foursquareAPI';
import placeInfo from './places.json';
import { withGoogleMap, GoogleMap, Marker, withScriptjs, InfoWindow} from 'react-google-maps';

class Map extends Component {
  constructor(props) {
        super()
    }

  render() {
    const places = placeInfo;
    const MapWithMarkers = compose(
      withStateHandlers(() => ({
        isOpen: false,
      }), {
      onToggleOpen: ({ isOpen }) => () => ({
        isOpen: !isOpen,
      }),
      showInfo: ({ showInfo,isOpen }) => (a) => ({
        isOpen: !isOpen,
        showInfoIndex: a
      })
    }),
    withScriptjs,
    withGoogleMap
  )(props =>
    <GoogleMap
      defaultCenter = { { lat: 51.453004, lng: -0.970946 } }
      defaultZoom = { 17 }
    >
    {places.map((place, id) => (
      <Marker
        position={{ lat: place.position.latitude, lng: place.position.longitude }}
        title={place.name}
        key={place.id}
        placeId={place.venueId}
        onClick={()=>{ props.showInfo(id)} }
      >
        {(props.showInfoIndex == id ) &&  <InfoWindow onCloseClick={props.onToggleOpen}>
          <div>Test</div>
        </InfoWindow>}
      </Marker>
      ))}
    </GoogleMap>
  );


   return(
     <div>
     <MapWithMarkers
       googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCj9wwQEOPRL67fzUS2F7Kod97Gok6ggVE"
       loadingElement={<div style={{ height: `100%` }} />}
       containerElement={ <div style={{ height: `100%`, width: `100%` }} /> }
       mapElement={ <div style={{ height: `100vh` }} /> }
     />
     </div>
   );
   }
};


export default Map;
