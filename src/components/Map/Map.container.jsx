import React from "react";
import Map from "./Map";

export const MapContainer = ({ registrationLinks }) => {

    const mapHandler = (event) => {        
        let url = "";
        // find the state in registrationLinks that matches the currently selected state
        for ( let i = 0; i < registrationLinks.length ; i++) {
            console.log(registrationLinks[i].abbreviation);
            if(registrationLinks[i].abbreviation === event.target.dataset.name) {
                url = registrationLinks[i].url
                i = registrationLinks.length;
            }
        }

        if(url) {
            window.open(url, "_blank");
        }
        else {
            alert("error: link not found");
        }
    };

    return <Map mapHandler={mapHandler} />
}
