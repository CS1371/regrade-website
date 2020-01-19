import React from 'react';
import Comment from '../types/Comment';

interface CardCommentProps {
    comments?: Comment[];
}

const renderComments = (comments: Comment[]) => {
    return comments.map(c => [
            <p>{c.data.text}</p>,
            <i>&emsp;{c.memberCreator.fullName}</i>,
            <hr/>,
        ]
    );
};

const CardComment: React.FunctionComponent<CardCommentProps> = ({ comments }) => {
    if (comments === undefined || comments.length === 0) {
        return null;
    }
    return (
        <React.Fragment>
            <h6>Comment:</h6>
            <div className="card regrade-card-comment">
                {renderComments(comments)}
            </div>
        </React.Fragment>
    );
};

export default CardComment;
