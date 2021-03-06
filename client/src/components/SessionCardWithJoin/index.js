import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

import "./style.css";

function SessionCardWithJoin(props) {
    return (
        <Card>
            <Row>
                <Col xl="12" className="mb-3">
                    <Card.Header className="header" as="h2">{props.sessionName}</Card.Header>
                </Col>
                {/* <Col xl="12">
                    <h3 style={{ "text-align": "center" }}>Collaborators / Band Members</h3>
                </Col> */}
                <Col xl="6">
                    <Card>
                        {/* <Card.Header as="h4">
                            {.name}
                        </Card.Header> */}
                        <Card.Body>
                            <Card.Text>
                                <ListGroup>
                                    <ListGroup.Item>
                                        <span style={{ "fontWeight": "500", "fontSize": "125%" }}>Jam Session Date: </span>
                                        <span style={{ "fontWeight": "450", "fontSize": "115%" }}>{props.sessionDate} at {props.sessionTime}</span>
                                        {/* <span style={{ "font-weight": "500", "font-size": "125%" }}>Instrument: </span>
                                        <span style={{ "font-weight": "450", "font-size": "115%" }}>{props.instrument}</span> */}
                                    </ListGroup.Item>
                                    {/* <ListGroup.Item>
                                        <span style={{ "font-weight": "500", "font-size": "125%" }}>Skill Level: </span>
                                        <span style={{ "font-weight": "450", "font-size": "115%" }}>{props.skillLevel}</span>
                                    </ListGroup.Item> */}
                                </ListGroup>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl="12">
                    <h4>Session Details</h4>
                    <p>{props.sessionDetails}</p>
                </Col>
                <Col>
                    <Button variant="primary" size="lg" onClick={props.onClick}>Join Session</Button>
                </Col>
            </Row>
        </Card>
    );
}

export default SessionCardWithJoin;