import React, { useState } from 'react'
import NavbarPage from "../Component/Layout/Navbar";
import Footer from "../Component/Layout/Footer";
import { Container } from 'reactstrap';
import "../Styles/people.css"


const People = () => {

    const [users, setUsers] = useState([
        { name: " Gerelt Trost", title: "Research Coordinator", image: require("../Images/GereltT.jpg") },
        { name: " Kelvin Boechler", title: "Senior Research Associate", image: require("../Images/kelvin-boechler.png") },
        { name: " Cyril Coupal", title: "Senior Research Associate", image: require("../Images/cyril-coupal.png") },
        { name: " Richard Dosselman", title: "Senior Research Associate", image: "//joeschmoe.io/api/v1/jon" },
    ]);

    const [partTime, setPart] = useState([
        { name: " Wade Lahoda", title: "Senior Research Associate", image: "//joeschmoe.io/api/v1/jon" },
        { name: " Tanya Lung", title: "Senior Research Associate", image: "//joeschmoe.io/api/v1/jess" },
        { name: " Colleen Patterson", title: "Senior Research Associate", image: "//joeschmoe.io/api/v1/jon" },
        { name: " William Topping", title: "Senior Research Associate", image: "//joeschmoe.io/api/v1/jon" },
    ]);

    const [Technician, setTech] = useState([
        { name: " Brian Dyck", title: "Research Technician", image: "//joeschmoe.io/api/v1/jon" },
        { name: " Tessa Herzberger", title: "Research Technician", image: "//joeschmoe.io/api/v1/jess" },
        { name: " Luke MacNeil", title: "Research Technician", image: "//joeschmoe.io/api/v1/jon" },
        { name: " Shahrzad Najafabadi", title: "Research Technician", image: "//joeschmoe.io/api/v1/jon" },
        { name: " Jacob Peckham", title: "Research Technician", image: "//joeschmoe.io/api/v1/jon" },
        { name: " Mathew Thompson", title: "Research Technician", image: "//joeschmoe.io/api/v1/jon" },
    ]);

    const peopleLoad = (name, image, title) => {
        return (
            <div className="people">
                <h3>{name}</h3>
                <img src={image} />
                <p>{title}</p>
            </div>
        );
    }

    return (
        <Container-fluid>
            <NavbarPage />
            <div className="People_page">
                <div className="people_style">
                    {peopleLoad("Dr. Terry Peckham", require("../Images/terrypeckham.png"), "Research Chair")}
                </div>
                <div className="people_style">
                    {users.map((user) => (
                        peopleLoad(user.name, user.image, user.title)
                    ))}
                </div>

                <div className="people_style">
                    {partTime.map((partTime) => (
                        peopleLoad(partTime.name, partTime.image, partTime.title)
                    ))}
                </div>

                <div className="people_style">
                    {Technician.map((Technician) => (
                        peopleLoad(Technician.name, Technician.image, Technician.title)
                    ))}
                </div>
            </div>
            <Footer />
        </Container-fluid>
    )
}

export default People