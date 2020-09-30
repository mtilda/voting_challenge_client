import React, { useState, useEffect } from "react";
import axios from "axios";
import Register from "./Register";

export const RegisterContainer = () => {
    const [ registrationLinks, setRegistrationLinks ] = useState([]);
    const [ isActive, setIsActive ] = useState(false);  // when this is true, display a loading status indicator

    useEffect( () => {
        const sheetAsJson = "https://spreadsheets.google.com/feeds/list/1ZQFCw3nzszsidf0kWWXJovEXM-5ChWtkgp2idXrZdjI/1/public/full?alt=json";

        const fetch = async () => {
            setIsActive(true);
            const response = await axios(sheetAsJson);
            setRegistrationLinks(
                response.data.feed.entry.map( (entry) => {
                    return {
                        state: entry.gsx$state.$t,
                        registrationUrl: entry.gsx$registrationurl.$t,
                    }
                })
            );
            setIsActive(false);
        }

        fetch().catch( error => console.error(error) );
    },[]);

    return <Register registrationLinks={registrationLinks} isActive={isActive} />;
}
