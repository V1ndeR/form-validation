import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

import './map.css';

function MapGoogle() {
    return (
        <GoogleMap
            defaultZoom={15}
            defaultCenter={{lat: 49.552361, lng: 25.592674}}
        />
    )
}

const WrappedMap = withScriptjs(withGoogleMap(MapGoogle))

export function Map() {
    return (
        <div className="map">
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyD-1XSre_hQF4JohaUSwOaM4iK7Fh-ftkk&callback=initMap`}
                loadingElement={<div style={{ height: "100%" }}/>}
                containerElement={<div style={{ height: "100%" }}/>}
                mapElement={<div style={{ height: "100%" }}/>}
            />
        </div>
    )
}