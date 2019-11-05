import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import styled from 'styled-components';

const Gmap = styled.div`
    width: 100%;
    height: 100%;
`;

// Dont know if the above dov will work, will have to test it when i get the api key => tbh dont evenm know if I need to set fixed with


const MapContainer = () => (
        <Gmap
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 41.409588, lng: 2.219364}}  //Center of map is EB
        >
        
        <Marker position={{lat: 41.409588, lng: 2.219364}} /> {/* EB MArker */}

        </Gmap>
    );
  
// export default GoogleApiWrapper = ({ apiKey: 'TOKEN HERE PLEASE' })(MapContainer);//Need to get credit card and get API key