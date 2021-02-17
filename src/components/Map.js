import React from 'react'
import GoogleMapReact from 'google-map-react'

const MarkerComponent = ({ text }) => <div>{text}</div>;

const Map = ({ location }) => {
    return (
        <div style={{ height: '400px', width: '400px', marginTop: '40px' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAK7bhwFBja9fm9I78AJ8pfpfnCP4xf2cM' }}
                defaultCenter={{ lat: 0, lng: 0 }}
                center={location}
                defaultZoom={15}
            >
                <MarkerComponent lat={location.lat} lng={location.lng} text="My marker"></MarkerComponent>
            </GoogleMapReact>
        </div>)
}

export default Map