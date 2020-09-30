import React from "react";
import {ButtonContainer as Button} from "../Button/Button.container";
import "./VotingStats.css";

export default () => {
    return (
        <div className="voting-stats">
           <h1>DID YOU KNOW?</h1> 
           <h2>Voters age 18-29</h2>
           <p>*who registered but did not vote in 2016</p>
           <div className="stats-container-outer">
               <div className="stats-container-inner">
                   <div className="ind-stat">
                       <h3 className="percentage-circle">47%</h3>
                       <p>Were too busy / had conflicting schedules on election dar</p>
                   </div>
                   <div className="ind-stat">
                       <h3 className="percentage-circle">65%</h3>
                       <p>Weren't interested in the candidates / issues</p>
                   </div>
                   <div className="ind-stat">
                       <h3 className="percentage-circle">20.5%</h3>
                       <p>Had problems with voter ID / voter registration</p>
                   </div>
               </div>
               <div className="elections-facts">
                   <h3>Close Elections in History</h3>
                   <ul>
                       <li>1839 - Marcus Morton won the Massachusetts governorship over Edward Everett by a single vote</li>
                       <li>1884 - Grover Cleveland won New York's Electoral College votes by a margin of 1,149 votes in the popular election</li>
                       <li>1948 - Lyndon Johnson wins the Texas Democratic primary runoff for Senate by 87 votes</li>
                       <li>2000 - Al Gore wins New Mexico vote by 366 votes</li>
                   </ul>
               </div>
           </div>
           <Button label="Spread the word"/>
        </div>
    )
}
