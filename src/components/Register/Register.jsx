import React from "react";
import { MapContainer as Map } from "../Map/Map.container";
import { Container, Row, Col } from "react-bootstrap";
import vote from "../../Images/vote.jpeg";
import "./Register.css";

export default ({ registrationLinks, isActive }) => (
  <Container
    fluid
    style={{ paddingLeft: 0, paddingRight: 0, paddingTop: 0, paddingBottom: 0 }}
  >
    <div className="register">
      {/* when the API call is active, display a loading status */}
      {isActive ? (
        <div className="register-activity" role="status">
          Loading...
        </div>
      ) : (
        <>
          <Row>
            <h1>Yes! Your vote counts!</h1>
          </Row>
          <Row>
            <div className="state-map-container">
   <div className="select-text">
                <h1>Select your state</h1>
                <p className="description">
                  {" "}
                  Each state has their own way of running their polls.
                </p>
                <p className="description">
                  No problem, we're going to send you directly to your state's
                  voter registration page.
                </p>
                <div className="col-md-6 text-center">
                  <img src={vote} />
                  <p className="text-to-direct">
                    Click on your state to begin!
                  </p>
                </div>
				</div>
                <div>
                  <Map registrationLinks={registrationLinks} />
                </div>
            </div>
          </Row>
        </>
      )}
    </div>
  </Container>
);
