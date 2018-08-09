/*global google*/
import React, { Component } from 'react';
import { getInfo } from './foursquareAPI.js';
import { Marker, InfoWindow} from 'react-google-maps';

class MarkersInfo extends Component {
  state = {
    placeInfo: {},
    error: false,
    loaded: false
  }

// Get the foursquareAPI and deal with errors
  componentDidMount() {
    const placeId = this.props.placeId;

    getInfo(placeId)
      .then(placeInfo => {
        this.setState({placeInfo, loaded: true})
      })
      .catch(err => {
        this.setState({ error: true });
      });
  }

  render() {
    const { placeInfo, error } = this.state;
    const { onToggleOpen, placeId, placePosition, placeTitle, toggle, markerId } = this.props;

    return (
      <Marker
        icon={markerId === placeId && toggle === 'show'}
        key={placeId}
        position={placePosition}
        title={placeTitle}
        animation = {google.maps.Animation.DROP}
        onClick={() => onToggleOpen(placeId,'show')}
        tabIndex="0"
      >

      {(toggle === 'show' && markerId=== placeId) &&
      <InfoWindow
      key={placeId}>
      {
      error ? (
      <div className="infoWindow" tabIndex="0" key={placeId}>
        <h3>{placeTitle}</h3>
        Error, unable to retrieve information. Please try again later
      </div>
      )

      :

      <div className="infoWindow" tabIndex="0" key={placeId}>
        <h3 className="infoWindow-title">
          {placeInfo.name}
        </h3>
        <div className="infoWindow-address">{placeInfo.location.address || "Unknown address"}
        </div>
        <div className="infoWindow-img">
          <img src={`${placeInfo.bestPhoto.prefix}width150${placeInfo.bestPhoto.suffix}`} alt={`Best of ${placeInfo.name}`} />
        </div>
      </div>
    }
    </InfoWindow>
  }
  </Marker>
  )
 };
}


export default MarkersInfo;
