import React from 'react';

class HomeworkList extends React.Component {

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
                    <ButtonObject
                        name={homeworkName}
                        onButtonClick={this.props.onButtonClick} />
                </li>
            );
        });
        // onButtonClick >> onSelectHomework
        return <ol>{list}</ol>;
    }
}

class ButtonObject extends React.Component {
    //Props
    // name
    // onButtonClick
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onButtonClick(this.props.name);
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.props.name}
            </button>
        );
    }
}

export default HomeworkList;