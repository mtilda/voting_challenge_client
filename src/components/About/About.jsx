import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <div className="mission-container">
        <img
          src="https://res.cloudinary.com/hannahbannan/image/upload/v1601563849/Voting%20App/parker-johnson-v0OWc_skg0g-unsplash_1_w3depr.png"
          alt="I Voted!"
        />
        <div className="mission-text">
          <h3>Our Mission...</h3>
          <p>
            We want to encourage young people to get involved and use their
            right to vote in order to be the change they want to see.
          </p>
        </div>
        <h5>
          By spreading awareness, providing tools, and teaching young people how
          to vote, we can make a difference.
        </h5>
        <h2>Meet Our Team</h2>
        <div className="devs">
          <div className="dev-ind">
            <img src="" alt="" />
            <a href=""></a>
            <p>Full Stack Developer</p>
          </div>
          <div className="dev-ind">
            <img src="" alt="" />
            <a href=""></a>
            <p>Full Stack Developer</p>
          </div>
          <div className="dev-ind">
            <img src="" alt="" />
            <a href=""></a>
            <p>Full Stack Developer</p>
          </div>
          <div className="dev-ind">
            <img src="" alt="" />
            <a href=""></a>
            <p>Full Stack Developer</p>
          </div>
        </div>
        <div className="designers">
          <div className="des-ind">
            <img src="" alt="" />
            <a href=""></a>
            <p>Full Stack Developer</p>
          </div>
          <div className="des-ind">
            <img src="" alt="" />
            <a href=""></a>
            <p>Full Stack Developer</p>
          </div>
          <div className="des-ind">
            <img src="" alt="" />
            <a href=""></a>
            <p>Full Stack Developer</p>
          </div>
          <div className="des-ind">
            <img src="" alt="" />
            <a href=""></a>
            <p>Full Stack Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};
