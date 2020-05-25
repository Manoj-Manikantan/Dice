import React from 'react'
import { Container, Card, CardTitle, Row, Col, CardDeck, CardText, CardBody } from "reactstrap"
import NavbarPage from "../Component/Layout/Navbar";
import Footer from "../Component/Layout/Footer";
// import LoremIpsum from 'react-lorem-ipsum';

const Services = () => {

    const cardLoad = (id1, id2, id3, id4) => {
        return (
            <Row>
                <CardDeck>
                    <Card>
                        <CardBody>
                            <CardTitle><b>{id1}</b></CardTitle>
                            <CardText>Lorem ipsum odor amet, consectetuer adipiscing elit. Feugiat facilisis maecenas scelerisque diam a faucibus. Eleifend nam rhoncus auctor sagittis justo mus nam.</CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <CardTitle><b>{id2}</b></CardTitle>
                            <CardText>Lorem ipsum odor amet, consectetuer adipiscing elit. Feugiat facilisis maecenas scelerisque diam a faucibus. Eleifend nam rhoncus auctor sagittis justo mus nam.</CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <CardTitle><b>{id3}</b></CardTitle>
                            <CardText>Lorem ipsum odor amet, consectetuer adipiscing elit. Feugiat facilisis maecenas scelerisque diam a faucibus. Eleifend nam rhoncus auctor sagittis justo mus nam.</CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <CardTitle><b>{id4}</b></CardTitle>
                            <CardText>Lorem ipsum odor amet, consectetuer adipiscing elit. Feugiat facilisis maecenas scelerisque diam a faucibus. Eleifend nam rhoncus auctor sagittis justo mus nam.</CardText>
                        </CardBody>
                    </Card>
                </CardDeck>
            </Row>
        )
    }

    return (
        <Container>
            <NavbarPage />
            <div>
                {cardLoad("AI / ML / Deep Learning", "Automation of Systems", "Big Data Storage, Aggregation and Analytics", "Concept Validation")}
                {cardLoad("Customized Training", "Cyber Security", "Data Integration", "Digital Analytical Services")}
                {cardLoad("Drone / Autonomous Vehicle Development", "IoT Sensor Integration", "Network Analysis", "Predictive Maintenance")}
                {cardLoad("Process Optimization", "Proof of Concept", "Prototype Development", "Software Design and Project Management")}
            </div>
            <Footer />
        </Container>
    )
}

export default Services;