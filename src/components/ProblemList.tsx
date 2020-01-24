import React from 'react';

import Problem from '../types/Problem';

import './ProblemList.css';
interface ProblemListProps {
  onButtonClick: (problemName: string) => void;
  problems: Problem[];
  selectedNames: string[];
}

const ProblemList: React.FC<ProblemListProps> = ({
  onButtonClick,
  problems,
  selectedNames
}) => {
  const list = problems.map(p => (
    <button
      type="button"
      key={p.name}
      className={`problem-button ${
        selectedNames.includes(p.name) ? 'selected-btn' : ''
      }`}
      onClick={() => onButtonClick(p.name)}
    >
      {p.name}
    </button>
  ));
  return (
    <div>
      <div className="problem-list">{list}</div>
    </div>
  );
};

export default ProblemList;
