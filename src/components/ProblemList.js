import React from 'react';

class ProblemList extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.onButtonClick(e.target.value);
    }

    render() {
        var list;
        const PROBLEMS = [
            'Problem 1',
            'Problem 2',
            'Problem 3',
            'Problem 4',
            'Problem 5'];
        list = PROBLEMS.map((problemName) => {
            return (
                <li key={problemName}>
                    <button
                        value={problemName}
                        onClick={this.handleClick}>
                        {problemName}
                    </button>
                </li>
            );
        });
        return <ol>{list}</ol>;
    }
}

export default ProblemList;