// @flow
import React, { Component } from 'react'
import { Map,
    TileLayer,
    CircleMarker,
    Popup,
    LayersControl,
    LayerGroup
} from 'react-leaflet'


const ReactLeaflet = {
    Map,
    TileLayer,
    CircleMarker,
    Popup,
    LayersControl,
    LayerGroup
  } ;
  
  const data = [{ lat: 52, lng: 4 }, { lat: 52, lng: 4.1 }];
  
  class SimpleExample extends React.Component {
    constructor() {
      super();
      this.state = {
        lat: 52,
        lng: 4,
        zoom: 10
      };
    }
  
    render() {
      const position = [this.state.lat, this.state.lng];
      return (
        <Map.LeafletMap center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          <LayersControl position="bottomleft">
            <LayersControl.Overlay name="Markers" checked>
              <LayerGroup>
                {data.map((point, index) => {
                  return (
                    <CircleMarker key={index} center={point} radius={10}>
                      <Popup>Doesn't show the text</Popup>
                    </CircleMarker>
                  );
                })}
              </LayerGroup>
            </LayersControl.Overlay>
          </LayersControl>
        </Map.LeafletMap>
      );
    }
  }
  
  export default SimpleExample
  