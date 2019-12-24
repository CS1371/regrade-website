import React from 'react';
import Description from './Description';
import TestCaseList from './TestCaseList';
import ProblemType from '../types/Problem';


interface ProblemProps {
    onButtonClick: (problemName: string, testCase: string|number) => void;
    onTextUpdate: (desc: string, problemName: string) => void;
    problem: ProblemType;
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
        const { problem, onButtonClick, onTextUpdate } = this.props;
        const { allTestCases } = this.state;

        return (
            <div>
                <h3>{problem.name}</h3>
                <TestCaseList
                    showTestCases={!allTestCases}
                    problem={problem}
                    onButtonClick={(p: string, t: string|number) => {
                        onButtonClick(p, t);
                        this.setState({ allTestCases: t === "all" });
                    }}
                />
                <Description
                    problem={problem}
                    onTextUpdate={onTextUpdate}
                />
            </div>
        );
    }
}

export default Problem;