import React from 'react';
import Problem from '../types/Problem';
import './TestCaseList.css';
interface TestCaseListProps {
    onButtonClick: (problemName: string, val: string|number, enable: boolean) => void;
    problem: Problem;
    showTestCases: boolean;
    selected: (string|number)[];
    shouldFlag: boolean;
}

const TestCaseList: React.FunctionComponent<TestCaseListProps> = ({ onButtonClick, problem, showTestCases, selected, shouldFlag }) => {
    const allOrSpecific = (
        <div className="test-case-selector">
            <button
                type="button"
                className={showTestCases ? '' : 'selected-btn'}
                onClick={() => onButtonClick(problem.name, 'all', true)}>
                All Test Cases
            </button>
            <button
                type="button"
                className={showTestCases ? 'selected-btn' : ''}
                onClick={() => onButtonClick(problem.name, 'none', true)}>
                Specific Test Cases
            </button>
        </div>
    );
    if (showTestCases) {
        return (
            <div className="specific-case-list">
                {
                    shouldFlag ? <p className="bad-choice"><em>Select at least one test case</em></p> : null
                }
                {allOrSpecific}
                <ul className="specific-cases">
                    {problem.testCases.map((testCase, i) => {
                        const isSelected = selected.length > 0 && typeof selected[0] === 'number' && selected.includes(i);
                        return (
                            <li key={problem.name + ' ' + testCase.inputs.join(',') + ' ' + testCase.outputs.join(',')}>
                                <button
                                    type="button"
                                    className={isSelected ? 'selected-btn' : ''}
                                    onClick={() => onButtonClick(problem.name, i, !isSelected)}>
                                    {`[${testCase.outputs.join(', ')}] = ${problem.name}(${testCase.inputs.join(', ')});`}
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