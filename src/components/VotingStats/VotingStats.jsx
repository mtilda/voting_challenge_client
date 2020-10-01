import React from "react";
import {ButtonContainer as Button} from "../Button/Button.container";
import {Container, Row, Col} from "react-bootstrap";
import "./VotingStats.css";

export const VotingStats = () => {
    return (
        <Container fluid style={{paddingLeft: 0, paddingRight: 0, paddingTop: 0, paddingBottom: 0}}>
        <div className="voting-stats">
           <h1>DID YOU KNOW?</h1> 
           <h2 className="centered">Voters age 18-29</h2>
           <p>*who registered but did not vote in 2016</p>
           <Row>
               <Col></Col>
               <Col xs="10">
           <div className="stats-container-outer">
               <Col>
               <div className="stats-container-inner">
                   <Row>
                   <div className="ind-stat">
                       <div className="percentage-circle">
                       <h3>47%</h3>
                       </div>
                       <p>Were too busy / had conflicting schedules on election dar</p>
                   </div>
                   </Row>
                   <Row>
                   <div className="ind-stat">
                       <div className="percentage-circle">
                       <h3>65%</h3>
                       </div>
                       <p>Weren't interested in the candidates / issues</p>
                   </div>
                   </Row>
                   <Row>
                   <div className="ind-stat">
                       <div className="percentage-circle">
                       <h3>20.5%</h3>
                       </div>
                       <p>Had problems with voter ID / voter registration</p>
                   </div>
                   </Row>
               </div>
               </Col>
               <Col>
               <div className="elections-facts">
                   <h3>Close Elections in History</h3>
                   <ul>
                       <li>1839 - Marcus Morton won the Massachusetts governorship over Edward Everett by a single vote</li>
                       <li>1884 - Grover Cleveland won New York's Electoral College votes by a margin of 1,149 votes in the popular election</li>
                       <li>1948 - Lyndon Johnson wins the Texas Democratic primary runoff for Senate by 87 votes</li>
                       <li>2000 - Al Gore wins New Mexico vote by 366 votes</li>
                   </ul>
               </div>
               </Col>
           </div>
           </Col>
           <Col></Col>
           </Row>
           <Button label="Spread the word"/>
        </div>
        </Container>
    )
}