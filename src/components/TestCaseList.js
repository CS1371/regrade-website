import React from 'react';

class TestCaseList extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.onButtonClick(e.target.name, e.target.value);
    }

    render() {
        const TESTCASES = [
            'TestCase 1',
            'TestCase 2',
            'TestCase 3'];
        var allOrSpecific =
            <div>
                <button
                    value="all"
                    name={this.props.problem}
                    onClick={this.handleClick}>
                    All Test Cases
                </button>
                <button
                    value="none"
                    name={this.props.problem}
                    onClick={this.handleClick}>
                    Specific Test Cases
                </button>
            </div>
        if (this.props.showTestCases) {
            return (
                <div>
                    {allOrSpecific}
                    <ul>
                        {TESTCASES.map(testCase => {
                            return (
                                <li key={this.props.problem + testCase}>
                                    <button
                                        value={testCase}
                                        name={this.props.problem}
                                        onClick={this.handleClick}>
                                        {testCase}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            );
        } else {
            return (
                <div>
                    {allOrSpecific}
                </div>
            );
        }
    }
}

export default TestCaseList;