import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Project from "./Project";
import Home from "./Home";
//import Button from "./Button";
//import Fade from 'react-reveal/Fade';


class View extends Component {

    state = {
        display: "home",
        isLoading: true,
        index: 0
    };

    componentDidMount() { this.setState({ isLoading: false }) };

    projects = event => {

        event.preventDefault();

        this.setState({ display: "portfolio" })
    }

    about = event => {
        event.preventDefault();

        this.setState({ display: "about" })
    }

    home = event => {
        event.preventDefault();

        this.setState({ display: "home" })
    }

    left = event => {
        let tempIndex = this.state.index;

        event.preventDefault();

        if (tempIndex === 0) {
            tempIndex = 5;
            this.setState({ index: tempIndex });

        }
        else {


            tempIndex--;
            this.setState({ index: tempIndex });
        }


    }

    right = event => {
        let tempIndex = this.state.index;

        event.preventDefault();

        if (tempIndex === 5) {
            tempIndex = 0;
            this.setState({ index: tempIndex });
        }
        else {
            tempIndex++;
            this.setState({ index: tempIndex });
            console.log(this.state.index);
        }


    }





    render() {
        if (this.state.isLoading === true) { return <div><h3>Loading...</h3></div> }

        else if (this.state.isLoading === false && this.state.display === "home") {
            return <div>
                
                <Header home={this.home} portfolio={this.projects} about={this.about} />
                <div className="buffer"></div>
                
                <Home />
              
             
                
            </div>
        }

        else if (this.state.display === "portfolio" && this.state.isLoading === false) {
            return <div>
        
                <Header home={this.home} portfolio={this.projects} about={this.about} />
                <div className="buffer"></div>
            
                            <Project index={this.state.index} leftClick={this.left} rightClick={this.right} />
                    
                
            </div>
        }

        else if (this.state.display === "about" && this.state.isLoading === false) {


            return <div>
                
            
                <Header home={this.home} portfolio={this.projects} about={this.about} />
                <div className="buffer"></div>
                <About />
                
                
            </div>
        }
    }


}

export default View;