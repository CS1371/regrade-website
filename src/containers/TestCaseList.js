import React from 'react';
import TestCaseButton from '../components/TestCaseButton';

class TestCaseList extends React.Component {

    render() {
        var display;
        const TESTCASES = [
            'TestCase 1',
            'TestCase 2',
            'TestCase 3'];
        if (this.props.showTestCases) {
            return (
                <ul>
                    {TESTCASES.map(testcase => {
                        return (
                            <li key={this.props.problem + testcase}>
                                <TestCaseButton
                                    name={testcase}
                                    problem={this.props.problem}
                                    onButtonClick={this.props.onButtonClick} />
                            </li>
                        );
                    })}
                </ul>
            );
        } else {
            return (
                <ul></ul>
            );
        }
    }
}

export default TestCaseList;