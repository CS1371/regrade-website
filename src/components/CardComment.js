import React from 'react';

class CardComment extends React.Component {
    render() {
        if (!this.props.value || this.props.value.length == 0)
            return [];
        return (
            <React.Fragment>
                <h6>Instructor's Comment:</h6>
                <div className="card regrade-card-comment">
                    <p className="card-text">{this.props.value}</p>
                </div>
            </React.Fragment>
        );
    }
}

export default CardComment;
