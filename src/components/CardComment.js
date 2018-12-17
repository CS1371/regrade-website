import React from 'react';

class CardComment extends React.Component {
    renderComments(comments) {
        var out = [];
        for (let comment of comments) {
            out.push(<p>{comment.data.text}</p>);
            out.push(<i>&emsp;{comment.memberCreator.fullName}</i>);
            out.push(<hr/>);
        }
        out.length--;
        return out;
    }

    render() {
        if (!this.props.comments || this.props.comments.length == 0)
            return [];
        return (
            <React.Fragment>
                <h6>Comment:</h6>
                <div className="card regrade-card-comment">
                    {this.renderComments(this.props.comments)}
                </div>
            </React.Fragment>
        );
    }
}

export default CardComment;
