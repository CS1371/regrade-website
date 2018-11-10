import React from 'react';

class ButtonObject extends React.Component {
    //Props
    // name
    // onButtonClick
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onButtonClick(this.props.name);
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.props.name}
            </button>
        );
    }
}

export default ButtonObject;