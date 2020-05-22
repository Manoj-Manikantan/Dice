import React, { Component } from 'react'
import NavbarPage from "../Component/Layout/Navbar";
import Footer from "../Component/Layout/Footer";
import { Container } from 'reactstrap';

export class People extends Component {

    render() {
        return (
            <Container>
                <NavbarPage />
                {/* People content to be added here  */}
                <Footer />
            </Container>

        )
    }
}

export default People