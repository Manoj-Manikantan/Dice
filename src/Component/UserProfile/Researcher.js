import React, { useEffect, useState } from 'react'
import { Row, Col, Container, Button } from "reactstrap"
import Dropdown from 'react-bootstrap/Dropdown'
import Axios from 'axios';

const Researcher = () => {

    const [projectValue, setProjectValue] = useState("");
    const [technicianValue, setTechnicianValue] = useState("");
    const [studentValue, setStudentValue] = useState("");

    const [projectDropDown, setProjectDropDown] = useState([" "]);
    const [technicianDropDown, setTechnicianDropDown] = useState([" "]);
    const [studentDropDown, setStudentDropDown] = useState([" "]);

    useEffect(() => {
        const url = "http://localhost:80/react_back-end/Project_Name.php"
        Axios.get(url)
            .then(res => res.data)
            .then(data => setProjectDropDown(data))

        const url1 = "http://localhost:80/react_back-end/Technician_Name.php"
        Axios.get(url1)
            .then(res => res.data)
            .then(data => setTechnicianDropDown(data))

        const url2 = "http://localhost:80/react_back-end/Student_Name.php"
        Axios.get(url2)
            .then(res => res.data)
            .then(data => setStudentDropDown(data))
    }, [])

    const showProjectName = () => {
        return (
            <Row>
                <select id="dropDown" value={projectValue} onChange={e => setProjectValue(e.target.value)}>
                    <option>---SELECT---</option>
                    {projectDropDown.map((resultValue) =>
                        <option value={resultValue.Project_Name}>{resultValue.Project_Name}</option>
                    )}
                </select>
            </Row>
        )
    }

    const addTeamProject = (teamMember) => {
        const userTech = {
            Project_Name: projectValue,
            Technician_Name: technicianValue,
            Team_Member: teamMember
        }
        const url4 = "http://localhost:80/react_back-end/Add_TeamProject.php"
        Axios.post(url4, userTech)
            .then(res => console.log(res.data))
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Row><h5>Project Name</h5></Row>
                    {showProjectName()}
                    <Row><h5>Technician Name</h5></Row>
                    <Row>
                        <select id="dropDown" value={technicianValue} onChange={e => setTechnicianValue(e.target.value)}>
                            <option>---SELECT---</option>
                            {technicianDropDown.map((resultValue) =>
                                <option value={resultValue.First_Name + " " + resultValue.Last_Name}>{resultValue.First_Name} {resultValue.Last_Name}</option>
                            )}
                        </select>
                    </Row>
                    <Row><button className="searchBtn" onClick={() => addTeamProject("Technician")} >Add Technician</button></Row>
                </Col>
                <Col>
                    <Row><h5>Project Name</h5></Row>
                    {showProjectName()}
                    <Row><h5>Student Name</h5></Row>
                    <Row>
                        <select id="dropDown" value={studentValue} onChange={e => setStudentValue(e.target.value)}>
                            <option>---SELECT---</option>
                            {studentDropDown.map((resultValue) =>
                                <option value={resultValue.First_Name + " " + resultValue.Last_Name}>{resultValue.First_Name} {resultValue.Last_Name}</option>
                            )}
                        </select>
                    </Row>
                    <Row><button className="searchBtn" onClick={() => addTeamProject("Student")} >Add Student</button></Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Researcher
