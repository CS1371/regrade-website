import React from 'react';

class CardComment extends React.Component {
    render() {
        if (!this.props.comment || this.props.comment.length == 0)
            return [];
        return (
            <React.Fragment>
                <h6>{this.props.commentor}'s Comment:</h6>
                <div className="card regrade-card-comment">
                    <p className="card-text">{this.props.comment}</p>
                </div>
            </React.Fragment>
        );
    }
}

export default CardComment;
