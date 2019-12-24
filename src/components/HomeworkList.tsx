import React from 'react';

interface HomeworkListProps {
    onButtonClick: (hwName: string, ind: number) => unknown;
    homeworks: string[];
};

const HomeworkList: React.FunctionComponent<HomeworkListProps> = ({ onButtonClick, homeworks }) => {
    const HOMEWORKS = [
        "Basics",
        "Functions",
        "Vectors / Strings",
        "Logicals",
        "Arrays / Masks",
        "Conditionals",
        "Iteration",
        "Low Level File I/O",
        "High Level File I/O",
        "Structures",
        "Numerical Methods",
        "Recursion",
        "Images",
        "Project"];
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