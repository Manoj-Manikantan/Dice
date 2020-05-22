import React, { Component } from 'react'
import NavbarPage from "../Component/Layout/Navbar";
import Footer from "../Component/Layout/Footer";
import { Container } from 'reactstrap';

export class SampleProjects extends Component {

    render() {
        return (
            <Container>
                <NavbarPage />
                {/* SampleProjects content to be added here  */}
                <Footer />
            </Container>

        )
    }
}

export default SampleProjects