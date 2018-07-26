import React from 'react';
import { Link } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//import 'bootstrap/dist/css/bootstrap-theme.css';

const Navigation = props => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link className="navbar-brand" to="/">Państwa.js</Link>

                    <ul className="navbar-nav">
                        <li className="nav-item"><Link className="nav-link" to="/countries">Countries</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/continents">Continents</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="container-fluid">
            {props.children}
        </div>
    </div>
);

export default Navigation;