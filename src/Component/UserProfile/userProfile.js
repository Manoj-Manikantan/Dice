import React, { useEffect, useState } from 'react'
import { Row, Col, Container, Card, CardImg, Button } from "reactstrap"
import Accordion from 'react-bootstrap/Accordion'
import NavbarPage from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import Axios from 'axios';
import Researcher from "./Researcher"
import Technician from "./Technician"
import Student from "./Student"

const UserProfile = () => {

    const [userRole, setuserRole] = useState("");

    useEffect(() => {
        const url = "http://localhost:80/react_back-end/Fetch_Role.php"

        Axios.get(url)
            .then(res => res.data)
            .then(data => setuserRole(data[0].User_Role))
    }, [])

    return (
        <Container>
            <NavbarPage />
            <Row>
                <Col>
                    <Row><h2>My details</h2></Row>
                    <Row><h5><b>Project : </b>Tesla VR</h5></Row>
                    <Row><h5><b>Role : </b>{userRole}</h5></Row>
                </Col>
                <Col>
                    <Researcher />
                    {/* Researcher/Technician/Student code goes here*/}
                </Col>
                <Col>
                    <Row><h5>Welcome,</h5></Row>
                    <Row><h5>John Wick</h5></Row>
                    <Row>
                        <Card style={{ width: "200px", height: "auto" }}>
                            <CardImg src="//joeschmoe.io/api/v1/jon" />
                        </Card>
                    </Row>
                    <Row><Button style={{ width: "200px", height: "auto" }}>Edit profile picture</Button></Row>
                    <Row>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Toggle as={Button} variant="link" eventKey="1" style={{ width: "200px", height: "auto" }}>
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

export default UserProfile

