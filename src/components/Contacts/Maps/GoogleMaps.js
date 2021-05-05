import React, { Component } from 'react';

import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';


export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},

        mapCenter: {
            lat: 42.6207108,
            lng: 23.3690722,
        }
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: true,
                activeMarker: null
            })
        }
    };

    render() {
        return (
            <Map google={this.props.google}
                initialCenter={{
                    lat: this.state.mapCenter.lat,
                    lng: this.state.mapCenter.lng
                }}>
                <Marker
                    position={{
                        lat: this.state.mapCenter.lat,
                        lng: this.state.mapCenter.lng
                    }}
                    center={{
                        lat: this.state.mapCenter.lat,
                        lng: this.state.mapCenter.lng
                    }}
                />


            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyA8n9uF16YLS5K9OgIq2qOZjYwxNjXrfjM')
})(MapContainer)