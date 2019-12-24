import React from 'react';

interface CardStatusProps {
    value: "New"|"Under Review"|"Accepted"|"Denied";
}

const CardStatus: React.FunctionComponent<CardStatusProps> = ({ value }) => {
    let textClass = '';

    switch (value) {
        case "New":
        case "Under Review":
            textClass = "text-info";
            break;
        case "Accepted":
            textClass = "text-success";
            break;
        case "Denied":
            textClass = "text-danger";
            break;
        default:
            textClass = "text-secondary";
    }
    return (
        <h6>
            Status:&nbsp;
            <span className={textClass}>{value}</span>
        </h6>
    );
}

export default CardStatus;

