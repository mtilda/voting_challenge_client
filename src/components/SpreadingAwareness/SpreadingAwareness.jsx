import React from "react";
import { ButtonContainer as Button } from "../Button/Button.container";
import "./SpreadingAwareness.css";

export const SpreadingAwareness = () => (
  <div className="spreading-awareness">
    <h1>Spreading Awareness</h1>
    <div className="did-you-know-container">
      <img
        src="https://res.cloudinary.com/hannahbannan/image/upload/v1601504148/Voting%20App/chris-murray-PXVQ7SNqdME-unsplash_fdgouq.jpg"
        alt="Talk to your friends about voting!"
      />
      <div className="did-you-know-right">
        <h2>Did you know?</h2>
        <p>
          According to the US Election Project, only 43% of voters age 18-29
          participated in the 2016 Election
        </p>
      </div>
    </div>
    <h1>Your Vote. Your Voice.</h1>
    <h1>Make it Count!</h1>
    <Button label="Learn More" />
  </div>
);
