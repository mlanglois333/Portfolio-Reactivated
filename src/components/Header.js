import React from "react";

function Header(props) {

    return (<div>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/" onClick={props.home}>Marc Langlois</a>
            
            <div id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/" onClick={props.portfolio}>Applications</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/" onClick={props.about}>About</a>
                    </li>
                </ul>
            </div>
            <div className="float-right">
            <a href="https://www.linkedin.com/in/marc-langlois-2b40b61b0/"><img src="./img/liImg.png" alt="linkedIn" className="linkImg" /></a>
        <a href='https://github.com/mlanglois333'><img src= "./img/github.png" alt="gitHub" className="linkImg" /></a>
            </div>
        </nav>

    </div>)

}

export default Header;