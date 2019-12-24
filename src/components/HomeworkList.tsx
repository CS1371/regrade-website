import React from 'react';

interface HomeworkListProps {
    onButtonClick: (hwName: string, ind: number) => unknown;
    homeworks: string[];
};

const HomeworkList: React.FunctionComponent<HomeworkListProps> = ({ onButtonClick, homeworks }) => {
    const list = homeworks.map((homeworkName, i) => {
        return (
            <li key={homeworkName}>
                <button
                    value={homeworkName}
                    onClick={() => onButtonClick(homeworkName, i + 1)}>
                    {homeworkName}
                </button>
            </li>
        );
    });
    return <ol>{list}</ol>;
}

export default HomeworkList;