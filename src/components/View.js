import React,{Component} from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Project from "./Project"

class View extends Component {

    state = {
        display: "home",
        isLoading:true
    };

    componentDidMount(){this.setState({isLoading:false}) };

    render() {
        if(this.state.isLoading === true){return <div><h3>Loading...</h3></div>}
        else{
        return <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col size="md-12">
                        <About></About>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                    <Project></Project>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    }
}


}

export default View;