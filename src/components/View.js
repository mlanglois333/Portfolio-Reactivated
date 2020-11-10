import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Project from "./Project";
import Home from "./Home";

class View extends Component {

    state = {
        display: "home",
        isLoading: true
    };

    componentDidMount() { this.setState({ isLoading: false }) };

    projects = ()=>{
        this.setState({display: "portfolio"})
    }

    about = ()=>{
        this.setState({display: "about"})
    }

    home = ()=>{
        this.setState({display: "home"})
    }

    

    render() {
        if (this.state.isLoading === true) { return <div><h3>Loading...</h3></div> }

        else if (this.state.isLoading === false && this.state.display === "home") {
            return <div>
                <Header home={this.home} portfolio={this.projects} about={this.about} />
                <Home />
                <Footer />
            </div>
        }

        else {
            return <div>
                <Header home={this.home} portfolio={this.projects} about={this.about} />
                <Container>
                    <Row>
                        <Col size="md-12">
                            <About />
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-12">
                            <Project />
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        }
    }


}

export default View;