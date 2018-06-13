import React from 'react';
import { NavLink } from 'react-router-dom';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class MapsCreate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedPlace: {
       name: ''
      },

    }
  }


  render() {

    return (
    <div>
      <h1 className="red">Create Map</h1>
      <div className="mapSize">
        <Map google={this.props.google} zoom={14}>

          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />

          <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow>
        </Map>
      </div>

      <NavLink to="/">Go Home</NavLink>
    </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyC8vtFNkQLQn1kHl0QAwAkDBp8JRyEFwjQ')
})(MapsCreate);

//AIzaSyC8vtFNkQLQn1kHl0QAwAkDBp8JRyEFwjQ