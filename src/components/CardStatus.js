import React from 'react';

class CardStatus extends React.Component {
    render() {
        var textClass;
        switch (this.props.value) {
            case "Pending":
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
        console.log(textClass);
        return (
            <h6 className="regrade-card-status">
                Status:&nbsp;
                <span className={textClass}>{this.props.value}</span>
            </h6>
        );
    }
}

export default CardStatus;

