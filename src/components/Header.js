import React from "react";

function Header(props) {

    return (
        <nav className="header">
            <a className="navbar-brand" href="/" onClick={props.home}>Marc Langlois</a>

                        <a className="nav-link" href="/" onClick={props.portfolio}>Applications</a>
                    
                   
                        <a className="nav-link" href="/" onClick={props.about}>About</a>
                    
                    
                        <a className="nav-link" href="https://docs.google.com/document/d/1Ysg97sg2KhNGJ9d0rwVgdR9BviSeHpazEl2W0yVpQbo/edit?usp=sharing">Resume</a>
                   
                        <a href="https://www.linkedin.com/in/marc-langlois-2b40b61b0/"><img src="./img/liImg.png" alt="linkedIn" className="linkImg" /></a>
                  
                   
                        <a href='https://github.com/mlanglois333'><img src="./img/github.png" alt="gitHub" className="linkImg" /></a>
                
        </nav>

    )

}

export default Header;