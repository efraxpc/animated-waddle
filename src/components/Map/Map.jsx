import _ from 'lodash'
import React from 'react'
import { compose, withProps } from 'recompose'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps'

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=ohed01o6z8f9tpOFQofm8w&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{   width: '100%',
        height: '100%',
        padding: 0,
        margin: 0,
        position: 'absolute',
        left: 0 }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    <Marker position={{ lat: -34.397, lng: 150.644 }} />
  </GoogleMap>
))

const enhance = _.identity

const ReactGoogleMaps = () => [
    <MyMapComponent key="map" />
]

export default enhance(ReactGoogleMaps)
