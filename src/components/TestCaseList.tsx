import React from 'react';
import Problem from '../types/Problem';

interface TestCaseListProps {
    onButtonClick: (problemName: string, val: string|number) => void;
    problem: Problem;
    showTestCases: boolean;
}

const TestCaseList: React.FunctionComponent<TestCaseListProps> = ({ onButtonClick, problem, showTestCases }) => {
    const allOrSpecific = (
        <div>
            <button
                value="all"
                onClick={() => onButtonClick(problem.name, 'all')}>
                All Test Cases
            </button>
            <button
                value="none"
                onClick={() => onButtonClick(problem.name, 'none')}>
                Specific Test Cases
            </button>
        </div>
    );
    if (showTestCases) {
        return (
            <div>
                {allOrSpecific}
                <ul>
                    {problem.testCases.map((testCase, i) => {
                        return (
                            <li key={problem + testCase.name}>
                                <button
                                    onClick={() => onButtonClick(problem.name, i)}>
                                    {testCase.name}
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

export default TestCaseList;