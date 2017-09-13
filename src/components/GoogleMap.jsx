import React from 'react';

export default class GoogleMap extends React.Component{
    componentDidMount(){
        new google.maps.Map(this.refs.map, {
            zoom: 7,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }
    
    render(){
        return <div ref="map" className="city-map" />;
    }
}