import React from "react";

function Header(props) {

    return (
        <nav className="navbar navbar-expand navbar-inverse header">
            <a className="navbar-brand" href="/" onClick={props.home}>Marc Langlois</a>

            <div id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/" onClick={props.portfolio}>Applications</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/" onClick={props.about}>About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://docs.google.com/document/d/1Ysg97sg2KhNGJ9d0rwVgdR9BviSeHpazEl2W0yVpQbo/edit?usp=sharing">Resume</a>
                    </li>
                </ul>
            </div>
        </nav>

    )

}

export default Header;