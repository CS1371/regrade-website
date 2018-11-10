import React from 'react';

class TestCaseButton extends React.Component {
    // Props:
    // name
    // problem
    // onButtonClick
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onButtonClick(this.props.problem, this.props.name);
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.props.name}
            </button>
        );
    }
}

export default TestCaseButton;