import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';



const mapStyles = {
    bottom: '2rem',
    right: '-4rem',
    width: '40rem',
    height: '40rem',
};

// Dont know if the above dov will work, will have to test it when i get the api key => tbh dont evenm know if I need to set fixed with




export class MapContainer extends Component {
  constructor(props) {
    super(props);
      this.myRef = React.createRef();
  }

  render(){
    if (!this.props.google) {
      return <div>Loading...</div>;
    }

    return (
      <div style={mapStyles}>
        <Map ref={this.myRef}
          google={this.props.google}
          
          zoom={14}
          initialCenter={{ lat: 41.409588, lng: 2.219364}}  //Center of map is EB
        >
        <Marker position={{lat: 41.409588, lng: 2.219364}} /> 
        </Map>
      </div>
    )
  }
}
    
  
export default GoogleApiWrapper({ 
  apiKey: 'AIzaSyDQGa5zZTL0G45-WQ8pn5tbMssAGJHD2xY' 
  })(MapContainer);//Need to get credit card and get API key