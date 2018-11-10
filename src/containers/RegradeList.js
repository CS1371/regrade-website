import React from 'react';
import './RegradeList.css';
import {getCards} from '../api';
import CardComment from '../components/CardComment';
import CardStatus from '../components/CardStatus';

class RegradeList extends React.Component {
    renderCards() {
        var data = getCards("busluel3")
        var out = [];
        if (data.cards.length > 0) {
            for (let card of data.cards) {
                out.push(
                    <div className="card text-left regrade-card">
                        <div className="card-header">
                            <div class="row">
                                <h5 className="card-title col-md-9 regrade-card-title">
                                    {card.homework}&nbsp;&nbsp;
                                    <small className="card-text">{card.timestamp}</small>
                                </h5>
                                <div class="col-md-3 text-right">
                                    <CardStatus value={card.status} />
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <h6>Description:</h6>
                            <p className="card-text">{card.description}</p>
                            <CardComment value={card.comment} />
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
        out.push( <a href="#" className="btn btn-secondary">New Regrade</a> );
        return out;
    }

    render() {
        return (
            <div className="RegradeList">
            <h2>Regrade Requests</h2>
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
