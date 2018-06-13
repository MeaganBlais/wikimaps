import React from 'react';
import { NavLink } from 'react-router-dom';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class MapsCreate extends React.Component {


  render() {
    return (
    <div>
      <h1>Create Map</h1>

      <Map google={this.props.google} zoom={14}>

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
            </div>
        </InfoWindow>
      </Map>

      <NavLink to="/">Go Home</NavLink>
    </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyC8vtFNkQLQn1kHl0QAwAkDBp8JRyEFwjQ')
})(MapsCreate);

//AIzaSyC8vtFNkQLQn1kHl0QAwAkDBp8JRyEFwjQ