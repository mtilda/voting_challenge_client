import React, { useState, useEffect } from "react";
import {features} from "../Data/state.json"

export default LoadCountries =() =>(
    load = (setState) =>{
        setState(features);
    }
)