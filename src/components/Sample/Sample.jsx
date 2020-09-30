import React from "react";
import { Button } from "react-bootstrap";
// css file imports should come last, so they cascade correctly
import "./Sample.css"

// default exports do not need a name
export default ({ state, handleClick }) =>
    <div className="sample">
        <Button
            className={state ? "green" : "red"} // ternaries are the only logic that should exist in presentational components
            onClick={handleClick}
        >
            Click me!
        </Button>
    </div>;
