import React from "react";
import Container from "./Container";
import Col from "./Col";
import Row from "./Row";

function Home() {

    return (<div>
        <div className="hero-image">
        <div className="hero-text">
            <h1 className="homeText">
                Marc Langlois
            </h1>

            <p className="homeText">
                Junior Engineer and Creative Problem-Solver
            </p>
        </div>
   </div>

   <Container>
       <Row>
           <Col size="md-6">
               <img src="./img/profilepic.JPG" alt="Self"></img>
           </Col>
           <Col size="md-6">
               <p className="homeText">
                   Thank you for visiting !
               </p>
           </Col>
       </Row>
       
   </Container>
   
   </div>)
}

export default Home;