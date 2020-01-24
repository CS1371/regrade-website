import React from 'react';
import './HomeworkList.css';
import { ShallowHomework } from '../types/Homework';

interface HomeworkListProps {
  shouldFlag: boolean;
  onButtonClick: (ind: number) => unknown;
  homeworks: ShallowHomework[];
  selected?: number;
}

const HomeworkList: React.FC<HomeworkListProps> = ({
  onButtonClick,
  homeworks,
  selected
}) => {
  const list = homeworks.map((hw, i) => {
    return (
      <button
        key={hw.number}
        className={selected === i + 1 ? 'homework-selected' : ''}
        onClick={() => onButtonClick(i + 1)}
      >
        {hw.name === undefined ? `Homework #${hw.number}` : hw.name!}
      </button>
    );
  });
  return <div className="homework-list">{list}</div>;
};

export default HomeworkList;
