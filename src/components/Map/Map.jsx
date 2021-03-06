import _ from 'lodash'
import React from 'react'
import { compose, withProps } from 'recompose'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps'
import { myConfig } from '../../config.js';

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      `https://maps.googleapis.com/maps/api/js?key=${myConfig.MAPS_KEY}&v=3.exp&libraries=geometry,drawing,places`,
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
  <GoogleMap defaultZoom={13.42} defaultCenter={{ lat: -12.0622557, lng: -77.0694275 }}>
    <Marker position={{ lat: -12.059944, lng: -77.0499507 }} />
  </GoogleMap>
))

const enhance = _.identity

const ReactGoogleMaps = () => [
    <MyMapComponent key="map" />
]

export default enhance(ReactGoogleMaps)
