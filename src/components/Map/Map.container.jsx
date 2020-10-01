import React from "react";
import Map from "./Map";

export const MapContainer = ({ registrationLinks }) => {

    const mapHandler = (event) => {
        alert(event.target.dataset.name);
    };

    return <Map mapHandler={mapHandler} />
}
