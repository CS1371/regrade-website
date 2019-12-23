import React from 'react';

class HomeworkList extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(name, i) {
        this.props.onButtonClick(name, i);
    }

    render() {
        var list;
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
        list = HOMEWORKS.map((homeworkName, i) => {
            return (
                <li key={homeworkName}>
                    <button
                        value={homeworkName}
                        onClick={() => this.handleClick(homeworkName, i + 1)}>
                        {homeworkName}
                    </button>
                </li>
            );
        });
        return <ol>{list}</ol>;
    }
}

export default HomeworkList;