import React from 'react';
import Problem from '../components/Problem';
import HomeworkList from '../components/HomeworkList';
import SubmissionOption from '../components/SubmissionOption';
import TASelect from '../components/TASelect';
import ProblemList from '../components/ProblemList';
import {createCard} from '../api';
import './RegradeCreate.css';

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
        let sampleTAs = [
            '--Select your TA',
            'Mason Murphy',
            'Baran Usluel',
            'Prithvi Rathaur',
            'Julie Petrillo'];
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
            testCases: sampleTestCases,
            TA1: "--Select your TA",
            TA2: "--Select your TA",
            TAs: sampleTAs
        };
        this.onSelectHomework = this.onSelectHomework.bind(this);
        this.onSelectSubmission = this.onSelectSubmission.bind(this);
        this.onSelectProblem = this.onSelectProblem.bind(this);
        this.onSelectTestCase = this.onSelectTestCase.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onTextUpdate = this.onTextUpdate.bind(this);
        this.handleBackButton = this.handleBackButton.bind(this);
        this.onSelectTA1 = this.onSelectTA1.bind(this);
        this.onSelectTA2 = this.onSelectTA2.bind(this);
        this.handleNextButton = this.handleNextButton.bind(this);
    }

    onSelectSubmission(subType) {
        this.setState({
            submissionType: subType
        })
    }

    onSelectTA1(name) {
        this.setState({
            TA1: name
        });
    }

    onSelectTA2(name) {
        this.setState({
            TA2: name
        });
    }

    onSelectHomework(name) {
        this.setState({
            // regradeData: data
            homeworkName: name
        });
    }

    handleNextButton() {
        var validData = true;
        if (this.state.submissionType === "") {
            validData = false;
            console.log("submission type");
        }
        if (this.state.TA1 === "--Select your TA" || this.state.TA2 === "--Select your TA"
            || this.state.TA1 === this.state.TA2) {
            validData = false;
            console.log("TAs");
        }
        if (this.state.homeworkName === "") {
            validData = false;
            console.log("homeworkName");
        }
        if (validData) {
            this.setState({
                hasSelectedHomework: true
            });
        }
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
        }
        this.setState({
            regradeData: problems
        });
    }

    onSelectTestCase(problemName, testCase) {

        var problems = this.state.regradeData;

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
    }

    onTextUpdate(newValue, problemName) {
        var problems = this.state.regradeData;
        problems[problemName].description = newValue;
        this.setState({
            regradeData: problems
        })
    }

    handleBackButton() {
        this.setState({
            hasSelectedHomework: false
        });
    }

    handleSubmit() {
        var data = this.state.regradeData;
        var validData = true;
        if (Object.keys(data).length === 0) {
            validData = false;
            console.log("Problems");
        } else {
            for (let field in data) {
                if (data[field].testCases.length < 1) {
                    validData = false;
                    console.log("testCases");
                }
                if (data[field].description.length < 20) {
                    validData = false;
                    console.log("description length");
                }
            }
        }
        if (validData) {
            data = this.state.regradeData;
            data.homeworkName = this.state.homeworkName;
            data.submissionType = this.state.submissionType;
            data.TA1 = this.state.TA1;
            data.TA2 = this.state.TA2;
            createCard(data);
            console.log("Submitted:");
            console.log(this.state.regradeData);
        } else {
            console.log("Failed to submit");
        }
    }

    render() {
        if (this.state.hasSelectedHomework) {
            var problems = Object.getOwnPropertyNames(this.state.regradeData).map(problem => {
                return (
                    <li key={problem} >
                        <Problem
                            problemName={problem}
                            testCases={this.state.testCases[problem]}
                            onButtonClick={this.onSelectTestCase}
                            onTextUpdate={this.onTextUpdate} />
                    </li>
                );
            })
            return (
                <div>
                    <button onClick={this.handleBackButton}>Back</button>
                    <h1>{this.state.homeworkName}</h1>
                    <h2>{this.state.submissionType}</h2>
                    <ProblemList
                        onButtonClick={this.onSelectProblem} />
                    <ul>{problems}</ul>
                    <button onClick={this.handleSubmit}>Submit</button>
                </div>
            );
        } else {
            return (
                <div className="regrade-card">
                    <h1>Choose a Homework</h1>
                    <SubmissionOption
                        onButtonClick={this.onSelectSubmission} />
                    <p>Select your TAs</p>
                    <TASelect
                        TAs={this.state.TAs}
                        onChoose={this.onSelectTA1}
                        selected={this.state.TA1} />
                    <TASelect
                        TAs={this.state.TAs}
                        onChoose={this.onSelectTA2}
                        selected={this.state.TA2} />
                    <HomeworkList onButtonClick={this.onSelectHomework} />
                    <button onClick={this.handleNextButton}>Next</button>
                </div>
            );
        }
    }
}

export default RegradeCreate;