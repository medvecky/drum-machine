import React from "react";
import Card from "react-bootstrap/Card";
function Display (props) {
    return(
        <div id="display">
           <Card>
               <Card.Header>Current sample</Card.Header>
               <Card.Body>{props.sample}</Card.Body>
           </Card>
        </div>
    );
}

export default Display;