import React, { Component } from 'react';
import { getLocations } from './foursquareAPI.js';
import { withGoogleMap, GoogleMap, Marker, withScriptjs, InfoWindow} from 'react-google-maps';

class MarkersInfo extends Component {
  state = {
    placeInfo: {},
    error: false,
    infoLoaded: false
  }

  componentDidMount() {
    const placeId = this.props.placeId;

    getLocations(placeId)
      .then(placeInfo => {
        this.setState({placeInfo, infoLoaded: true})
      })
      .catch(err => {
        this.setState({ error: true });
      });
  }

  render() {
    const { placeInfo, error, infoLoaded } = this.state;
    const { onToggleOpen, showInfo, placeId, placePosition, placeTitle, toggle, markerId } = this.props;

    return (
      <Marker
        icon={markerId === placeId && toggle === 'view'}
        key={placeId}
        position={placePosition}
        title={placeTitle}
        onClick={() => onToggleOpen(placeId,'show')}
      >

      {(toggle === 'show' && markerId=== placeId) &&
      <InfoWindow
      key={placeId}
      onCloseClick={placeId, 'hide'}>

      {
      error ? (
      <div className="place-details" tabIndex="0" key={placeId}>
        Error, unable to retrieve information. Please try again later
      </div>
      )

      :

      <div className="place-details" tabIndex="0" key={placeId}>
              <h3 className="place-title">
                {placeInfo.name}
              </h3>
              <div className="place-address">{placeInfo.location.address || "Unknown address"}</div>
              <div className="details-img">
                <img src={`${placeInfo.bestPhoto.prefix}width150${placeInfo.bestPhoto.suffix}`} alt={`Best of ${placeInfo.name}`} />
              </div>
        </div>
      }
      </InfoWindow>

    }
    </Marker>
  )

}
}


export default MarkersInfo;
