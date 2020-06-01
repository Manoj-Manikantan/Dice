import React from 'react'
import { Row, Col, Container, Card, CardImg, Button } from "reactstrap"
import Accordion from 'react-bootstrap/Accordion'
import Footer from "./Layout/Footer";
import "../Styles/userProfile.css"

const userProfile = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Row><h2>My details</h2></Row>
                    <Row><h5><b>Project : </b>Tesla VR</h5></Row>
                    <Row><h5><b>Role : </b> Researcher</h5></Row>
                </Col>
                <Col>
                    {/* Researcher/Technician/Student code goes here*/}
                </Col>
                <Col>
                    <Row><h5>Welcome,</h5></Row>
                    <Row><h5>John Wick</h5></Row>
                    <Row className="col3-adjust">
                        <Card>
                            <CardImg src="//joeschmoe.io/api/v1/jon" />
                        </Card>
                    </Row>
                    <Row><Button>Edit profile picture</Button></Row>
                    <Row>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                Change password
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <div>
                                    <input type="text" />
                                    <Button>Update</Button>
                                </div>
                            </Accordion.Collapse>
                        </Accordion>
                    </Row>
                </Col>
            </Row>
            <Footer />
        </Container >
    )
}

export default userProfile

