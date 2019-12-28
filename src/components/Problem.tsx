import React from 'react';
import Description from './Description';
import TestCaseList from './TestCaseList';
import ProblemType from '../types/Problem';

import './Problem.css';

interface ProblemProps {
    onButtonClick: (problemName: string, testCase: string|number, enable: boolean) => void;
    onTextUpdate: (desc: string, problemName: string) => void;
    problem: ProblemType;
    shouldFlag: boolean;
    testCases: (string|number)[];
    description: string;
}

interface ProblemState {
    allTestCases: boolean;
}

class Problem extends React.Component<ProblemProps, ProblemState> {
    constructor(props: ProblemProps) {
        super(props);
        this.state = {
            allTestCases: true,
        };
    }

    render() {
        const { problem, onButtonClick, onTextUpdate, shouldFlag, testCases, description } = this.props;
        const { allTestCases } = this.state;

        return (
            <div className="justify-problem">
                <h3 className={`problem-name ${shouldFlag ? 'bad-choice' : ''}`}>
                    {problem.name}
                </h3>
                <TestCaseList
                    showTestCases={!allTestCases}
                    problem={problem}
                    onButtonClick={(p: string, t: string|number, e: boolean) => {
                        onButtonClick(p, t, e);
                        this.setState({ allTestCases: t === "all" });
                    }}
                    selected={testCases}
                    shouldFlag={shouldFlag && testCases.length === 0}
                />
                <Description
                    problem={problem}
                    onTextUpdate={onTextUpdate}
                    text={description}
                    shouldFlag={shouldFlag && description.length < 20}
                />
            </div>
        );
    }
}

export default Problem;