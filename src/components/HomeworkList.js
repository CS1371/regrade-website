import React from 'react';

class HomeworkList extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.onButtonClick(e.target.value);
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
        list = HOMEWORKS.map((homeworkName) => {
            return (
                <li key={homeworkName}>
                    <button
                        value={homeworkName}
                        onClick={this.handleClick}>
                        {homeworkName}
                    </button>
                </li>
            );
        });
        // onButtonClick >> onSelectHomework
        return <ol>{list}</ol>;
    }
}

export default HomeworkList;