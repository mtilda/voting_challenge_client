import React from "react";
import "./VoterTurnout.css";
import { ButtonContainer as Button } from "../Button/Button.container";

export const VoterTurnout = () => (
  <div>
    <h1>Your Vote Matters!</h1>
    <img
      className="turnout-img"
      src="https://res.cloudinary.com/hannahbannan/image/upload/v1601504019/Voting%20App/Graph2_1_ukcfo6.jpg"
      alt="Voter turnout numbers"
    />
    <br />
    <Button label="Learn More" />
  </div>
);
