import React, { useEffect, useState } from 'react'
import { Row, Col, Container, Button } from "reactstrap"
import Dropdown from 'react-bootstrap/Dropdown'
import Axios from 'axios';

const Technician = () => {

    const [projectDropDown, setprojectDropDown] = useState("");
    const [studentDropDown, setstudentDropDown] = useState("");

    const dropdownView = (drp1, drp2) => {
        return (
            <Col>
                <Row><h5>Project Name</h5></Row>
                <Row>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Project list
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Row>
                <Row><h5>{drp1}</h5></Row>
                <Row>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {drp2}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Row>
                <Row><Button>Add</Button><Button>Remove</Button></Row>
            </Col>
        )
    }

    return (
        <Container>
            <Row>
                {dropdownView("Student name", "Students list")}
            </Row>
        </Container >
    )
}

export default Technician
