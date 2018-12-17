import React from 'react';

class CardStatus extends React.Component {
    render() {
        var textClass;
        switch (this.props.value) {
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
                <span className={textClass}>{this.props.value}</span>
            </h6>
        );
    }
}

export default CardStatus;

