import React from 'react';

class SubmissionOption extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.onButtonClick(e.target.value);
    }

    render() {
        return (
            <span>
                <button
                    value="Original"
                    onClick={this.handleClick}>
                    Original
                </button>
                <button
                    value="Resubmission"
                    onClick={this.handleClick}>
                    Resubmission
                </button>
            </span>
        );
    }
}

export default SubmissionOption;