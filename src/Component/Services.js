import React from 'react'
import { Container, Row, Col, Card } from "reactstrap"
import NavbarPage from "../Component/Layout/Navbar";
import Footer from "../Component/Layout/Footer";

const Services = () => {

    const cardLoad = (id1, id2, id3, id4) => {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <Card>{id1}</Card>
                    </Col>
                    <Col>
                        <Card>{id2}</Card>
                    </Col>
                    <Col>
                        <Card>{id3}</Card>
                    </Col>
                    <Col>
                        <Card>{id4}</Card>
                    </Col>
                </Row>
            </Container>
        )
    }

    return (
        <Container>
            <NavbarPage />
            {cardLoad("AI / ML / Deep Learning", "Automation of Systems", "Big Data Storage, Aggregation and Analytics", "Concept Validation")}
            {cardLoad("Customized Training", "Cyber Security", "Data Integration", "Digital Analytical Services")}
            {cardLoad("Drone / Autonomous Vehicle Development", "IoT Sensor Integration", "Network Analysis", "Predictive Maintenance")}
            {cardLoad("Process Optimization", "Proof of Concept", "Prototype Development", "Software Design and Project Management")}
            <Footer />
        </Container>
    )
}

export default Services
