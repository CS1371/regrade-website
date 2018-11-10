import React from 'react';
import ReactDOM from 'react-dom';
import Problem from './containers/Problem';
import HomeworkList from './containers/HomeworkList';
import ButtonObject from './components/ButtonObject';
import TestCaseButton from './components/TestCaseButton';
import SubmissionOption from './containers/SubmissionOption';
import ProblemList from './containers/ProblemList';
import TestCaseList from './containers/TestCaseList';

class RegradeForm extends React.Component {
    constructor(props) {
        super(props);
        let sampleProblems = [
            "Problem 1",
            "Problem 2",
            "Problem 3",
            "Problem 4",
            "Problem 5"];
        let tests = [
            'Test Case 1',
            'Test Case 2',
            'Test Case 3'];
        var sampleTestCases = {};
        for (let problem in sampleProblems) {
            sampleTestCases[problem] = tests;
        }
        this.state = {
            homeworkNumber: 0,
            homeworkName: '',
            submissionType: '',
            hasSelectedHomework: false,
            problemObject: {},
            problemList: sampleProblems,
            testCases: sampleTestCases
            // homeworkObject: 
            // problemObject:
            //      Problem1: {
            //          testCase1: description
            //          testCase2: description
        };
        this.onSelectHomework = this.onSelectHomework.bind(this);
        this.onSelectSubmission = this.onSelectSubmission.bind(this);
        this.onSelectProblem = this.onSelectProblem.bind(this);
        this.onSelectTestCase = this.onSelectTestCase.bind(this);
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
        let problems = Object.assign({}, this.state.problemObject);
        if (problems.hasOwnProperty(problem)) {
            delete problems[problem];
        } else {
            problems[problem] = {};
        }
        this.setState({
            problemObject: problems
        });
        // let problems = this.state.problemList;
        // if (problems.includes(problem)) {
        //     problems.splice(problems.indexOf(problem), 1);
        // } else {
        //     problems.push(problem);
        // }
        // this.setState({
        //     problemList: problems
        // })
    }

    onSelectTestCase(problem, testCase) {
        let problems = Object.assign({}, this.state.problemObject);
        let testCases = Object.assign({}, problems[problem]);
        if (!testCases.hasOwnProperty(testCase)) {
            testCases[testCase] = '';
                // console.log(problem);
                // console.log(testCase);
        } else {
            delete testCases[testCase];
        }
        problems[problem] = testCases;
        this.setState({
            problemObject: problems
        })
        console.log(problems);
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
            var problems = Object.getOwnPropertyNames(this.state.problemObject).map(problem => {
                return (
                    <li key={problem} >
                        <Problem
                            problemName={problem}
                            testCases={this.state.testCases[problem]}
                            onSelectTestCase={this.onSelectTestCase}
                            onTextUpdate={this.onSelectProblem} />
                    </li>
                );
            })
            return (
                <div>
                    <h1>{this.state.homeworkName}</h1>
                    <h2>{this.state.submissionType}</h2>
                    <SubmissionOption
                        onButtonClick={this.onSelectSubmission} />
                    <ProblemList
                        onButtonClick={this.onSelectProblem} />
                    <ul>{problems}</ul>
                </div>
                // <div>
                //     <Submission onButtonClick={this.onSelectSubmission} />
                //     <ProblemList onButtonClick={this.onSelectProblem} />
                //     <p>{this.state.homeworkName}</p>
                //     <p>{this.state.submissionType}</p>
                //     <ul>{list}</ul>
                //     <TestCases
                //         onButtonClick={this.onSelectTestCase}
                //         problemList={Object.getOwnPropertyNames(this.state.problemObject)} />
                // </div>
            );
        } else {
            return (
                <HomeworkList onButtonClick={this.onSelectHomework} />
            );
        }
    }
}


        // // console.log(this.props.problemList);
        // var problems = this.props.problemList;
        // // console.log(problems);
        // var display;
        // const TESTCASES = [
        //     'TestCase 1',
        //     'TestCase 2',
        //     'TestCase 3'];
        // // console.log(problems);
        // display = problems.map(problem => {
        //     return (
        //         <div key={problem}>
        //             <p>{problem}</p>
        //             <ol>
        //                 <li key={problem + "all"}>
        //                     <TestCaseButton
        //                         name={"All test cases"}
        //                         problem={problem}
        //                         onButtonClick={this.props.onButtonClick} />
        //                 </li>
        //                 {TESTCASES.map(testcase => {
        //                     return (
        //                         <li key={problem + testcase}>
        //                             <TestCaseButton
        //                                 name={testcase}
        //                                 problem={problem}
        //                                 onButtonClick={this.props.onButtonClick} />
        //                         </li>
        //                     );
        //                 })}
        //             </ol>
        //         </div>
        //     );
        // });
        // return <div>{display}</div>;
    // }

ReactDOM.render(
    <RegradeForm />,
    document.getElementById('root')
);