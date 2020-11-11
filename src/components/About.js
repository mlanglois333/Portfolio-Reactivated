import React from "react";


function About() {
    return (<div >
        <p className="aboutText">
            I'm a graduate of the UNH Full-Stack Coding Bootcamp and hold a BA in Communication Arts from the University New Hampshire.
            Former restaurant/coffee roastery manager with over a decade of experience working in a fast-paced environment where communication, 
            ability to multitask, and attention to detail are key. Proficient audio and video engineer and graphic artist. Health enthusiast and
            lover of the outdoors.
        </p>

        <p className="aboutText">Experienced in:</p>
        <ul className="aboutText">
            <li>HTML</li>
            <li>CSS and CSS frameworks</li>
            <li>Javascript, Jquery, and Typescript</li>
            <li>MySql/Sequelize</li>
            <li>NoSql/MongoDB</li>
            <li>3rd Party and Server-side APIs</li>
            <li>Express</li>
            <li>NodeJs</li>
            <li>React</li>
            <li>Socket</li>
            <li>Phaser</li>
            
            

        </ul>
        <p className="aboutText">Please see my <a href='https://docs.google.com/document/d/1Ysg97sg2KhNGJ9d0rwVgdR9BviSeHpazEl2W0yVpQbo/edit?usp=sharing'>resume</a> for a more detailed history.</p>
        <br />
        <a href="https://www.linkedin.com/in/marc-langlois-2b40b61b0/"><img src="../assets/liImg.png" alt="linkedIn" className="linkImg" /></a>
        <a href='https://github.com/mlanglois333'><img src= "../assets/github.png" alt="gitHub" className="linkImg" /></a>
    </div>)
}

export default About;