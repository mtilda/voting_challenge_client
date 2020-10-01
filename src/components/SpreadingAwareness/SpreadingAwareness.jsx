import React from "react";
import { ButtonContainer as Button } from "../Button/Button.container";
import { Container, Row, Col } from "react-bootstrap";
import "./SpreadingAwareness.css";

export const SpreadingAwareness = () => (
  <Container
    fluid
    style={{ paddingLeft: 0, paddingRight: 0, paddingTop: 0, paddingBottom: 0 }}
  >
    <div className="spreading-awareness">
      <h1>Spreading Awareness</h1>
      <Row>
        <Col xs="1"></Col>
        <Col>
          <div className="did-you-know-container">
            <Col>
            <img
              src="https://res.cloudinary.com/hannahbannan/image/upload/v1601504148/Voting%20App/chris-murray-PXVQ7SNqdME-unsplash_fdgouq.jpg"
              alt="Talk to your friends about voting!"
            />
            </Col>
            <Col>
            <div className="did-you-know-right">
              <h2>Did you know?</h2>
              <p>
                According to the US Election Project, only <strong>43% of voters age
                18-29</strong> participated in the 2016 Election
              </p>
            </div>
            </Col>
          </div>
        </Col>
        <Col xs="1"></Col>
      </Row>
      <h1>Your Vote. Your Voice. <br/> Make it Count!</h1>
      <Button label="Learn More" />
    </div>
  </Container>
);
