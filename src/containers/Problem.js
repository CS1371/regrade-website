import React from 'react';
import ButtonObject from '../components/ButtonObject';
import TestCaseButton from '../components/TestCaseButton';
import Description from '../components/Description';
import TestCases from './TestCaseList';

class Problem extends React.Component {
    // Props:
    // testCases
    // onButtonClick
    // textUpdate
    constructor(props) {
        super(props);
        this.state = {
            allTestCases: true,
            testCases: this.props.testCases
        };
        this.handleAllClicked = this.handleAllClicked.bind(this);
        this.handleSpecificClicked = this.handleSpecificClicked.bind(this);
    }

    handleSpecificClicked() {
        this.setState({
            allTestCases: false
        });
    }

    handleAllClicked() {
        this.setState({
            allTestCases: true
        });
    }

    render() {
        return (
            <div>
                <h3>{this.props.problemName}</h3>
                <ButtonObject
                    name="All Test Cases"
                    onButtonClick={this.handleAllClicked} />
                <ButtonObject
                    name="Specific Test Cases"
                    onButtonClick={this.handleSpecificClicked} />
                <TestCases
                    showTestCases={!this.state.allTestCases}
                    problem={this.props.problemName}
                    onButtonClick={this.props.onButtonClick} />
                <Description
                    onChange={this.props.textUpdate} />
            </div>
        );
    }
}

export default Problem;