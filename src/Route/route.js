import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Component/Home";
import About from "../Component/About";
import Contact from "../Component/Contact";
import People from "../Component/People";
import SampleProjects from "../Component/sampleProjects";
import Services from "../Component/Services";
import Login from "../Component/Login";

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/People" component={People} />
                    <Route exact path="/services" component={Services} />
                    <Route exact path="/sampleProjects" component={SampleProjects} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/login" component={Login} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;