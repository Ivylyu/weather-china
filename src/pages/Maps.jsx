import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class Maps extends Component {

  render() {
    return (
      <iframe
        width="600"
        height="450"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC0e6BoPxzEIT6jMdHf0s2QHHZdGekAGtw
          &q=Space+Needle,Seattle+WA"
        allowfullscreen
      />
    );
  }
}

export default Maps;
