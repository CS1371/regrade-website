import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import RegradeList from './containers/RegradeList';
import RegradeCreate from './containers/RegradeCreate';
import logo from './images/courseBrand.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

ReactDOM.render(
    <Router basename={`${process.env.PUBLIC_URL}/`}><div>
    <nav className="navbar navbar-dark bg-dark">
        <div className="container">
            <a className="navbar-brand" href="/">
                <img src={logo} width="50" height="50" className="d-inline-block align-middle logo" alt="CS 1371 Logo"/>
                <h2 className="d-inline-block align-middle">CS 1371</h2>
            </a>
            <a className="navbar-text" href="#">
                Feedback
            </a>
        </div>
    </nav>
    <div className="container">
        <div className="subpage">
            <Route exact path="/" component={RegradeList} />
            <Route path="/new" component={RegradeCreate} />
        </div>
    </div>
    </div></Router>
, document.getElementById('root'));
