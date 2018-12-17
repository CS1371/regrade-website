import React from 'react';
import './RegradeList.css';
import {getCards, login} from '../api';
import CardComment from '../components/CardComment';
import CardStatus from '../components/CardStatus';

class RegradeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: [], cards: [], loading: true};
    }

    componentDidMount() {
        let result = getCards();
        result.then(data => {
            if (!data || !("username" in data) || data.username.length == 0) {
                login();
            } else if (!("cards" in data)) {
                console.error("Invalid json from getCards(): Missing cards field");
            } else {
                this.setState({
                    username: data.username,
                    cards: data.cards,
                    loading: false
                });
            }
        });
    }

    logoutPrompt() {
        if (this.state.loading)
            return [];
        return (
            <div className="logout-prompt text-right">
                <p>Hello <b>{this.state.username}</b>!</p>
                <p>Not you? <a href="./api/login.php?logout=">Logout</a></p>
            </div>
        );
    }

    renderCards() {
        if (this.state.loading)
            return ( <h5 className="card-title">Loading...</h5> );
        var cards = this.state.cards;
        var out = [];
        if (cards.length > 0) {
            for (let card of cards) {
                out.push(
                    <div className="card text-left regrade-card">
                        <div className="card-header">
                            <div className="row">
                                <h5 className="card-title col-md-9 regrade-card-title">
                                    {card.name}&nbsp;&nbsp;
                                    <small className="card-text">{card.dateCreated}</small>
                                </h5>
                                <div class="col-md-3 text-right">
                                    <CardStatus value={card.status} />
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <h6>Description:</h6>
                            <p className="card-text">{card.desc}</p>
                            <CardComment comments={card.comments}/>
                        </div>
                    </div>
                );
            }
            out.push( <hr/> );
            out.push( <p className="card-text">Would you like to submit another homework regrade request?</p> );
        } else {
            out.push( <h5 className="card-title">No regrades so far!</h5> );
            out.push( <p className="card-text">Would you like to submit a homework regrade request?</p> );
        }
        out.push( <a href="#" className="btn regrade-button">New Regrade</a> );
        return out;
    }

    render() {
        return (
            <div className="RegradeList">
            <div className="row">
                <div className="col-md-9">
                    <h2>Regrade Requests</h2>
                </div>
                <div className="col-md-3">
                    {this.logoutPrompt()}
                </div>
            </div>
            <div className="card text-center regrade-card-container">
                <div className="card-body">
                    {this.renderCards()}
                </div>
            </div>
            </div>
        );
    }
}

export default RegradeList;
