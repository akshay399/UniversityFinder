import React from "react";
import "./Smallcard.css";
import Card from "react-bootstrap/Card";
function Smallcard(props) {
  return (
    <div>
      <div className="container text-center">
        <Card className="cardForSwipe">
          <Card.Body className="swipeText">
            <Card.Text>
              <h3>{props.line}</h3>
            </Card.Text>
            {console.log("hiii", props.link)}
            <Card.Link href={props.link} style={{ color: "#E8D454" }}>
              Click Here
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Smallcard;
