import React from 'react';
import ReactDOM from 'react-dom';


class RegradeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            homeworkNumber: 0,
            homeworkName: '',
            submissionType: '',
            problemList: [],
            testCases: {},
            descriptions: {},
            hasSelectedHomework: false
        }
        this.onSelectHomework = this.onSelectHomework.bind(this);
        this.onSelectSubmission = this.onSelectSubmission.bind(this);
        this.onSelectProblem = this.onSelectProblem.bind(this);
    }

    onSelectHomework(name) {
        this.setState({
            hasSelectedHomework: true,
            homeworkName: name
        });
    }

    onSelectSubmission(submissionType) {
        this.setState({
            submissionType: submissionType
        })
    }

    onSelectProblem(problem) {
        let problems = this.state.problemList;
        if (problems.includes(problem)) {
            problems.splice(problems.indexOf(problem), 1);
        } else {
            problems.push(problem);
        }
        this.setState({
            problemList: problems
        })
    }

    onSelectTestCase(testcase) {
        this.setState({

        })
    }

    render() {
        if (this.state.hasSelectedHomework) {
            // console.log(this.state.problemList);
            var list = this.state.problemList.map(name => {
                    return (
                        <li key={name}>
                            {name}
                        </li>
                    );
                });
            return (
                <div>
                    <Submission onButtonClick={this.onSelectSubmission} />
                    <ProblemList onButtonClick={this.onSelectProblem} />
                    <p>{this.state.homeworkName}</p>
                    <p>{this.state.submissionType}</p>
                    <ul>{list}</ul>
                    <TestCases
                        onButtonClick={this.onSelectTestCase}
                        problemList={this.state.problemList} />
                </div>
            );
        } else {
            return (
                <HomeworkList onButtonClick={this.onSelectHomework} />
            );
        }
    }
}

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


class Submission extends React.Component {

    render() {
        return (
            <span>
                <ButtonObject
                    name="Original"
                    onButtonClick={this.props.onButtonClick} />
                <ButtonObject
                    name="Resubmission"
                    onButtonClick={this.props.onButtonClick} />
            </span>
        );
    }
}

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

class TestCases extends React.Component {

    render() {
        // console.log(this.props.problemList);
        var problems = this.props.problemList;
        // console.log(problems);
        var display;
        const TESTCASES = [
            'TestCase 1',
            'TestCase 2',
            'TestCase 3'];
        console.log(problems);
        display = problems.map(problem => {
            return (
                <div key={problem}>
                    <p>{problem}</p>
                    <ol>
                        <li key={problem + "all"}>
                            <ButtonObject
                                name={"All test cases"}
                                onButtonClick={this.props.onButtonClick} />
                        </li>
                        {TESTCASES.map(testcase => {
                            return (
                                <li key={problem + testcase}>
                                    <ButtonObject
                                        name={testcase}
                                        onButtonClick={this.props.onButtonClick} />
                                </li>
                            );
                        })}
                    </ol>
                </div>
            );
        });
        return <div>{display}</div>;
    }
}

class TestCaseSet extends React.Component {
    
}

class ButtonObject extends React.Component {
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



// class Descriptions extends React.Component {

// }




ReactDOM.render(
    <RegradeForm />,
    document.getElementById('root')
);