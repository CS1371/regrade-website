import React from 'react';
import Description from './Description';
import TestCaseList from './TestCaseList';

class Problem extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            onButtonClick: this.props.onButtonClick,
            allTestCases: true,
            testCases: this.props.testCases
        };
        this.handleAllClicked = this.handleAllClicked.bind(this);
        this.handleSpecificClicked = this.handleSpecificClicked.bind(this);
        this.handleClicked = this.handleClicked.bind(this);
    }

    handleSpecificClicked() {
        this.state.onButtonClick(this.props.problemName, "none")
        this.setState({
            allTestCases: false
        });
    }

    handleAllClicked() {
        this.props.onButtonClick(this.props.problemName, "all")
        this.setState({
            allTestCases: true
        });
    }

    handleClicked(problemName, testCase) {
        console.log(testCase);
        this.props.onButtonClick(problemName, testCase);
        this.setState({
            allTestCases: (testCase === "all")
        })
    }

    render() {
        return (
            <div>
                <h3>{this.props.problemName}</h3>
                <TestCaseList
                    showTestCases={!this.state.allTestCases}
                    problem={this.props.problemName}
                    onButtonClick={this.handleClicked} />
                <Description
                    problem={this.props.problemName}
                    onTextUpdate={this.props.onTextUpdate} />
            </div>
        );
    }
}

export default Problem;