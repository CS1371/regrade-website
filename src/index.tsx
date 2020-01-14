import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import RegradeList from './containers/RegradeList';
import RegradeCreate from './containers/RegradeCreate';
import logo from './images/courseBrand.png';

interface AppState {
    isCreating: boolean;
}

class App extends React.Component<{}, AppState> {
    public constructor(props: {}) {
        super(props);

        this.state = {
            isCreating: false,
        };
    }
    public render() {
        const { isCreating } = this.state;

        if (isCreating) {
            return <RegradeCreate />;
        }
        return <RegradeList createHandler={() => this.setState({ isCreating: true })} />;
    }
}

ReactDOM.render(
    <div className="regrade-app">
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={logo} width="50" height="50" className="d-inline-block align-middle logo" alt="CS 1371 Logo"/>
                    <h2 className="d-inline-block align-middle">CS 1371</h2>
                </a>
            </div>
        </nav>
        <div className="container">
            <div className="subpage">
                <App />
            </div>
        </div>
    </div>,
    document.getElementById('root'));
