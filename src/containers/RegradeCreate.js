import React from 'react';
import Problem from '../components/Problem';
import HomeworkList from '../components/HomeworkList';
import SubmissionOption from '../components/SubmissionOption';
import ProblemList from '../components/ProblemList';
import {createCard} from '../api';

class RegradeCreate extends React.Component {
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
            homeworkName: "",
            submissionType: "",
            hasSelectedHomework: false,
            regradeData: {},
            problemList: sampleProblems,
            testCases: sampleTestCases
            // homeworkObject: 
            //  regradeData:
            //       homeworkName: "Iteration"
            //       submissionType: "Original"
            //       Problem 1: {
            //           testCases: ["Test Case 1", "Test Case 2"],
            //           description: "why they want a regrade"
            //         }
        };
        this.onSelectHomework = this.onSelectHomework.bind(this);
        this.onSelectSubmission = this.onSelectSubmission.bind(this);
        this.onSelectProblem = this.onSelectProblem.bind(this);
        this.onSelectTestCase = this.onSelectTestCase.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onTextUpdate = this.onTextUpdate.bind(this);
        this.handleBackButton = this.handleBackButton(this);
    }

    onSelectHomework(name) {
        var data = this.state.regradeData;
        data.homeworkName = name;
        this.setState({
            hasSelectedHomework: true,
            regradeData: data
        });
    }

    onSelectSubmission(submissionType) {
        var data = this.state.regradeData;
        data.submissionType = submissionType;
        this.setState({
            regradeData: data
        })
    }

    onSelectProblem(problem) {
        let problems = Object.assign({}, this.state.regradeData);
        if (problems.hasOwnProperty(problem)) {
            delete problems[problem];
        } else {
            problems[problem] = {
                testCases: ["all"],
                description: ""
            };
            // console.log("new problem: ");
            // console.log(problems);
        }
        this.setState({
            regradeData: problems
        });
    }

    onSelectTestCase(problemName, testCase) {
        // this.state.regradeData[problemName].testCases.push(testCase)
        // console.log("current Problems: ")
        // console.log(this.state.regradeData);
        // let problems = {...this.state.regradeData};
        // let problems = Object.assign({}, this.state.regradeData,
        //     {problemName}: Object.assign);
        // let testCases = problems.testCases;
        // console.log(testCases);
        // console.log(problems);
        var problems = this.state.regradeData;
        // console.log(problems);
        // console.log(problemName);
        // console.log(problems[problemName]);
        if (testCase === "all") {
            problems[problemName].testCases = ["all"];
        } else if (testCase === "none") {
            problems[problemName].testCases = [];
        } else if (!problems[problemName].testCases.includes(testCase)) {
            problems[problemName].testCases.push(testCase);
        }
        this.setState({
            regradeData: problems
        })
        // console.log(problems);
    }

    onTextUpdate(newValue, problemName) {
        // console.log(problemName);
        var problems = this.state.regradeData;
        problems[problemName].description = newValue;
        this.setState({
            regradeData: problems
        })
        // console.log(this.state.regradeData);
    }

    handleBackButton() {
        this.setState({
            hasSelectedHomework: false
        });
    }

    handleSubmit() {
        var data = this.state.regradeData;
        var validData = true;
        if (!data.hasOwnProperty("homeworkName")) {
            validData = false;
            console.log("1");
        } else if (!data.hasOwnProperty("submissionType")) {
            validData = false;
            console.log("2");
        } else if (Object.keys(data).length <= 2) {
            validData = false;
            console.log("3");
        } else {
            console.log(Object.keys(data));
            for (let field in data) {
                if (field !== "homeworkName" && field !== "submissionType") {
                    console.log(field);
                    if (data[field].testCases.length < 1) {
                        validData = false;
                        console.log("4");
                    } else if (data[field].description.length < 20) {
                        validData = false;
                        console.log("5");
                    }
                }
            }
        }
        if (validData) {
            createCard();
            console.log("Submitted");
        } else {
            console.log("Failed to submit");
        }
    }

    render() {
        if (this.state.hasSelectedHomework) {
            // console.log(this.state.problemList);
            // var list = this.state.problemList.map(name => {
            //         return (
            //             <li key={name}>
            //                 {name}
            //             </li>
            //         );
            //     });
            var problems = Object.getOwnPropertyNames(this.state.regradeData).map(problem => {
                if (problem !== "homeworkName" && problem !== "submissionType") {
                    return (
                        <li key={problem} >
                            <Problem
                                problemName={problem}
                                testCases={this.state.testCases[problem]}
                                onButtonClick={this.onSelectTestCase}
                                onTextUpdate={this.onTextUpdate} />
                        </li>
                    );
                }
            })
            return (
                <div>
                    <button onClick={this.handleBackButton}>Back</button>
                    <h1>{this.state.regradeData.homeworkName}</h1>
                    <h2>{this.state.regradeData.submissionType}</h2>
                    <SubmissionOption
                        onButtonClick={this.onSelectSubmission} />
                    <ProblemList
                        onButtonClick={this.onSelectProblem} />
                    <ul>{problems}</ul>
                    <button onClick={this.handleSubmit}>Submit</button>
                </div>
                // <div>
                //     <Submission onButtonClick={this.onSelectSubmission} />
                //     <ProblemList onButtonClick={this.onSelectProblem} />
                //     <p>{this.state.homeworkName}</p>
                //     <p>{this.state.submissionType}</p>
                //     <ul>{list}</ul>
                //     <TestCases
                //         onButtonClick={this.onSelectTestCase}
                //         problemList={Object.getOwnPropertyNames(this.state.regradeData)} />
                // </div>
            );
        } else {
            return (
                <div>
                    <h1>Choose a Homework</h1>
                    <HomeworkList onButtonClick={this.onSelectHomework} />
                </div>
            );
        }
    }
}

export default RegradeCreate;