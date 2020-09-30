import React, { useState } from "react";
import Sample from "./Sample";

// you must name container components, because Sample.container is not a valid name
// when you import this component, use the following syntax
// import { SampleContainer as Sample } from "PATH/Sample/Sample.container";
export const SampleContainer = () => {
    // state is stored in container components
    const [ state, setState ] = useState(false);

    // all logic is stored in container components
    const handleClick = () => {
        setState(!state);
    }

    return <Sample state={state} handleClick={handleClick} />
}