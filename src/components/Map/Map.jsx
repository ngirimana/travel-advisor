import React from "react";
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined"; 
import Rating from '@material-ui/lab'
import useStyles from "./styles";


const Map = ({setCoordinates,setBounds,coordinates}) => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600)');
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAqnIMyeBVpH49s0OlKO-QWjCCVkJkMI8o" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng })
          setBounds({ ne: e.bounds.ne, sw: e.bounds.sw })
        }}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
};
export default Map;
