import React from "react";

function About() {
    return (<div>
        <h1>About Me</h1>
        <br />
        <p>Skills And Experience:</p>
        <ul>
            <li>HTML</li>
            <li>CSS and CSS frameworks</li>
            <li>Javascript/Jquery</li>
            <li>MySql/Sequelize</li>
            <li>3rd Party/Server-side APIs</li>
            <li>Express</li>
            <li>NodeJs</li>
        </ul>
        <p>Please see my <a href='https://docs.google.com/document/d/1Ysg97sg2KhNGJ9d0rwVgdR9BviSeHpazEl2W0yVpQbo/edit?usp=sharing'>resume</a> for a more detailed history.</p>
        <br />
        <a href="https://www.linkedin.com/in/marc-langlois-2b40b61b0/"><img src="/img/liImg.png" alt="linkedIn"></img></a>
        <a href='https://github.com/mlanglois333'><img src= "/img/github.png" alt="gitHub" /></a>
    </div>)
}

export default About;