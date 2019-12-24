import React from 'react';
import Problem from '../components/Problem';
import HomeworkList from '../components/HomeworkList';
import SubmissionOption from '../components/SubmissionOption';
import TASelect from '../components/TASelect';
import ProblemList from '../components/ProblemList';
import {createCard} from '../api';
import ProblemType from '../types/Problem';
import './RegradeCreate.css';
import RegradeData from '../types/Regrade';
import Payload from '../types/RegradePayload';

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
    "Project",
];

const sampleTAs = [
    '--Select your TA',
    'Mason Murphy',
    'Baran Usluel',
    'Prithvi Rathaur',
    'Julie Petrillo',
];

interface RegradeCreateState {
    homeworkNumber: number;
    homeworkName: string;
    submissionType: "Original"|"Resubmission"|undefined;
    hasSelectedHomework: boolean;
    regradeData: RegradeData[];
    problemList: ProblemType[],
    TA1: string;
    TA2: string;
};

class RegradeCreate extends React.Component<{}, RegradeCreateState> {
    constructor(props: {}) {
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
        const probs: ProblemType[] = sampleProblems.map(p => {
            return {
                name: p,
                testCases: tests.map(t => {return { name: t }}),
            };
        })
        this.state = {
            homeworkNumber: 0,
            homeworkName: "",
            submissionType: undefined,
            hasSelectedHomework: false,
            regradeData: [],
            problemList: probs,
            TA1: "--Select your TA",
            TA2: "--Select your TA",
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

    onSelectSubmission(subType?: "Original"|"Resubmission") {
        this.setState({
            submissionType: subType
        })
    }

    onSelectTA1(name: string) {
        this.setState({
            TA1: name
        });
    }

    onSelectTA2(name: string) {
        this.setState({
            TA2: name
        });
    }

    onSelectHomework(name: string, i: number) {
        this.setState({
            homeworkName: name,
            homeworkNumber: i,
        });
    }

    handleNextButton() {
        const { submissionType, TA1, TA2, homeworkName } = this.state;
        let validData = true;
        if (submissionType === undefined) {
            validData = false;
            console.log("submission type");
        }
        if (TA1 === "--Select your TA" || TA2 === "--Select your TA" || TA1 === TA2) {
            validData = false;
            console.log("TAs");
        }
        if (homeworkName === "") {
            validData = false;
            console.log("homeworkName");
        }
        if (validData) {
            this.setState({
                hasSelectedHomework: true
            });
        }
    }

    onSelectProblem(problemName: string) {
        // if we already have it, remove it; otherwise, add it and default to all
        console.log(`onSelect: ${problemName}`);
        let { regradeData } = this.state;
        if (regradeData.findIndex(p => p.problemName === problemName) !== -1) {
            // it's here! filter out and engage
            regradeData = regradeData.filter(p => p.problemName !== problemName);
        } else {
            // it's gone. Add it!
            regradeData.push({
                problemName: problemName,
                description: '',
                testCases: [ 'all' ],
            });
        }
        this.setState({ regradeData });
    }

    onSelectTestCase(problemName: string, testCase: string|number) {
        const { regradeData } = this.state;
        const ind = regradeData.findIndex(p => p.problemName === problemName);
        if (testCase === "all") {
            regradeData[ind].testCases = ['all'];
        } else if (testCase === "none") {
            regradeData[ind].testCases = [];
        } else if (!regradeData[ind].testCases.includes(testCase)) {
            if (regradeData[ind].testCases.length === 1 && regradeData[ind].testCases[0] === 'all') {
                regradeData[ind].testCases = [];
            }
            regradeData[ind].testCases.push(testCase);
        }
        this.setState({ regradeData });
    }

    onTextUpdate(newValue: string, problemName: string) {
        const { regradeData } = this.state;
        regradeData[regradeData.findIndex(p => p.problemName === problemName)].description = newValue;
        this.setState({ regradeData });
    }

    handleBackButton() {
        this.setState({
            hasSelectedHomework: false
        });
    }

    handleSubmit() {
        const { regradeData } = this.state;
        let validData = true;
        if (regradeData.length === 0) {
            validData = false;
            console.log("Problems");
        } else if (regradeData.findIndex(p => p.testCases.length === 0) !== -1) {
            validData = false;
            console.log("testCases");
        } else if (regradeData.findIndex(p => p.description.length < 20)) {
            validData = false;
            console.log("description length");
        }
        if (validData) {
            const { TA1, TA2, homeworkName, homeworkNumber, submissionType } = this.state;
            const toSubmit: Payload = {
                problems: regradeData,
                TA1,
                TA2,
                homeworkName,
                homeworkNumber,
                submissionType: submissionType!,
            };
            createCard(toSubmit);
            console.log("Submitted:");
        } else {
            console.log("Failed to submit");
        }
    }

    render() {
        if (this.state.hasSelectedHomework) {
            const { problemList, homeworkName, submissionType, regradeData } = this.state;
            const problems = regradeData.map(problem => {
                return (
                    <li key={problem.problemName} >
                        <Problem
                            problem={problemList.find(p => p.name === problem.problemName)!}
                            onButtonClick={this.onSelectTestCase}
                            onTextUpdate={this.onTextUpdate}
                        />
                    </li>
                );
            })
            return (
                <div>
                    <button onClick={this.handleBackButton}>Back</button>
                    <h1>{homeworkName}</h1>
                    <h2>{submissionType}</h2>
                    <ProblemList problems={problemList} onButtonClick={this.onSelectProblem}/>
                    <ul>{problems}</ul>
                    <button onClick={this.handleSubmit}>Submit</button>
                </div>
            );
        } else {
            const { TA1, TA2 } = this.state;
            return (
                <div className="regrade-card">
                    <h1>Choose a Homework</h1>
                    <SubmissionOption
                        onButtonClick={this.onSelectSubmission} />
                    <p>Select your TAs</p>
                    <TASelect
                        TAs={sampleTAs}
                        onChoose={this.onSelectTA1}
                        selected={TA1} />
                    <TASelect
                        TAs={sampleTAs}
                        onChoose={this.onSelectTA2}
                        selected={TA2} />
                    <HomeworkList
                        onButtonClick={this.onSelectHomework}
                        homeworks={HOMEWORKS}    
                    />
                    <button onClick={this.handleNextButton}>Next</button>
                </div>
            );
        }
    }
}

export default RegradeCreate;