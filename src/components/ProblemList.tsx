import React from 'react';

import Problem from '../types/Problem';

interface ProblemListProps {
    onButtonClick: (problemName: string) => void;
    problems: Problem[];
}

const ProblemList: React.FunctionComponent<ProblemListProps> = ({ onButtonClick, problems }) => {
    const list = problems.map((p) => (
            <li key={p.name}>
                <button
                    type="button"
                    onClick={() => onButtonClick(p.name)}
                >
                    {p.name}
                </button>
            </li>
        )
    );
    return <ol>{list}</ol>;
}

export default ProblemList;