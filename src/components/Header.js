import React from "react";

function Header(props) {

    return (<div>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/" onClick={props.home}>Marc Langlois</a>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/" onClick={props.portfolio}>Applications</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/" onClick={props.about}>About</a>
                    </li>
                </ul>
            </div>
        </nav>

    </div>)

}

export default Header;