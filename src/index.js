import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RegradeList from './containers/RegradeList';
import RegradeCreate from './containers/RegradeCreate';
import logo from './images/courseBrand.png';

ReactDOM.render(
    <React.Fragment>
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
            <RegradeList />
        </div>
    </div>
    </React.Fragment>
, document.getElementById('root'));
