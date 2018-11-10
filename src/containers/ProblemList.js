import React from 'react';
import ButtonObject from '../components/ButtonObject';

class ProblemList extends React.Component {

    render() {
        var list;
        const PROBLEMS = [
            'Problem 1',
            'Problem 2',
            'Problem 3',
            'Problem 4',
            'Problem 5'];
        list = PROBLEMS.map((name) => {
            return (
                <li key={name}>
                    <ButtonObject
                        name={name}
                        onButtonClick={this.props.onButtonClick} />
                </li>
            );
        });
        // onButtonClick >> onSelectProblem
        return <ol>{list}</ol>;
    }
}

export default ProblemList;