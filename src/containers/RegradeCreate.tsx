import React from 'react';
import Problem from '../components/Problem';
import HomeworkList from '../components/HomeworkList';
import SubmissionOption from '../components/SubmissionOption';
import TASelect from '../components/TASelect';
import ProblemList from '../components/ProblemList';
import { createCard, getHomeworks, getHomework, getTAs } from '../api';
import './RegradeCreate.css';
import RegradeData from '../types/Regrade';
import Payload from '../types/RegradePayload';
import { ShallowHomework, Homework } from '../types/Homework';
import TA from '../types/TA';

enum SubmissionState {
    READY,
    INFLIGHT,
    FINISHED,
    FAILED,
};

interface RegradeCreateState {
    homeworks?: ShallowHomework[],
    homework?: Homework,
    tas?: TA[],
    submissionType: "Original"|"Resubmission"|undefined;
    regradeData: RegradeData[];
    TA1?: TA;
    TA2?: TA;
    shouldFlag: boolean;
    hasLoaded: {
        initial: boolean;
        homework: boolean;
    },
    submissionState: SubmissionState;
};

class RegradeCreate extends React.Component<{}, RegradeCreateState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            submissionType: undefined,
            regradeData: [],
            shouldFlag: false,
            hasLoaded: {
                initial: false,
                homework: false,
            },
            submissionState: SubmissionState.READY,
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

        Promise.all([
            getTAs(),
            getHomeworks(),
        ])
        .then(resp => {
            this.setState({
                tas: resp[0],
                homeworks: resp[1],
                hasLoaded: {
                    initial: true,
                    homework: false,
                },
            });
        });
    };

    onSelectSubmission(subType?: "Original"|"Resubmission") {
        this.setState({
            submissionType: subType
        })
    }

    onSelectTA1(ind: number) {
        const { hasLoaded, tas } = this.state;
        if (hasLoaded.initial && ind >= 0) {
            this.setState({
                TA1: tas![ind],
            });
        } else {
            this.setState({ TA1: undefined });
        }
    }

    onSelectTA2(ind: number) {
        const { hasLoaded, tas } = this.state;
        if (hasLoaded.initial && ind >= 0) {
            this.setState({
                TA2: tas![ind],
            });
        } else {
            this.setState({ TA2: undefined });
        }
    }

    onSelectHomework(i: number) {
        const { homeworks } = this.state;
        if (homeworks !== undefined) {
            // Get the homework and then update
            getHomework(i)
            .then(hw => this.setState({ homework: hw }))
            .then();
        }
    }

    handleNextButton() {
        const { TA1, TA2, homework } = this.state;
        let validData = true;
        if (TA1 === undefined || TA2 === undefined || TA1.name === TA2.name) {
            validData = false;
        } else if (homework === undefined) {
            validData = false;
        }
        if (validData) {
            this.setState({
                hasLoaded: {
                    initial: true,
                    homework: true,
                },
                shouldFlag: false,
            });
        } else {
            this.setState({ shouldFlag: true });
        }
    }

    onSelectProblem(problemName: string) {
        // if we already have it, remove it; otherwise, add it and default to all
        let { regradeData } = this.state;
        const { homework } = this.state;
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
            const probs = homework!.problems;
            regradeData.sort((a, b) => (
                probs.findIndex(p => p.name === a.problemName) - probs.findIndex(p => p.name === b.problemName)
            ));
        }
        this.setState({ regradeData });
    }

    onSelectTestCase(problemName: string, testCase: string|number, enable: boolean) {
        const { regradeData } = this.state;
        const ind = regradeData.findIndex(p => p.problemName === problemName);
        if (testCase === "all") {
            regradeData[ind].testCases = ['all'];
        } else if (testCase === "none") {
            regradeData[ind].testCases = [];
        } else {
            if (regradeData[ind].testCases.length === 1 && regradeData[ind].testCases[0] === 'all') {
                regradeData[ind].testCases = [];
            }
            if (enable) {
                regradeData[ind].testCases.push(testCase);   
            } else {
                regradeData[ind].testCases = regradeData[ind].testCases.filter(i => i !== testCase)
            }
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
            hasLoaded: {
                initial: true,
                homework: false,
            }
        });
    }

    isValidSubmission(): boolean {
        const { regradeData, submissionType } = this.state;
        if (submissionType === undefined) {
            return false;
        } else if (regradeData.length === 0) {
            return false;
        } else if (regradeData.findIndex(p => p.testCases.length === 0) !== -1) {
            return false;
        } else if (regradeData.findIndex(p => p.description.length < 20) !== -1) {
            return false;
        }
        return true;
    }

    handleSubmit() {
        const { regradeData } = this.state;
        if (this.isValidSubmission()) {
            const { TA1, TA2, homework, submissionType } = this.state;
            const toSubmit: Payload = {
                problems: regradeData,
                TA1: TA1!,
                TA2: TA2!,
                homeworkName: homework!.name,
                homeworkNumber: homework!.number,
                submissionType: submissionType!,
            };
            this.setState({ submissionState: SubmissionState.INFLIGHT });
            createCard(toSubmit)
                .then(r => {
                    if (r.status === 200) {
                        this.setState({ submissionState: SubmissionState.FINISHED });
                        window.setTimeout(() => {
                            window.location.reload();
                        }, 1000);
                    } else {
                        this.setState({ submissionState: SubmissionState.FAILED });
                    }
                })
        } else {
            this.setState({ shouldFlag: true });
            console.log("Failed to submit");
        }
    }

    render() {
        const { hasLoaded } = this.state;
        if (hasLoaded.homework) {
            const { homework, submissionType, regradeData, shouldFlag, submissionState } = this.state;
            const problems = regradeData.map((problem, i) => {
                const pFlag = problem.description.length < 20 || problem.testCases.length === 0;
                return (
                    <React.Fragment key={problem.problemName}>
                        <hr key={problem.problemName + 'hr'} className="problem-separator" />
                        <Problem
                            key={problem.problemName + 'prob'}
                            shouldFlag={shouldFlag && pFlag}
                            problem={homework!.problems.find(p => p.name === problem.problemName)!}
                            onButtonClick={this.onSelectTestCase}
                            onTextUpdate={this.onTextUpdate}
                            testCases={problem.testCases}
                            description={problem.description}
                        />
                    </React.Fragment>
                );
            });
            let subText: JSX.Element = <React.Fragment>Submit</React.Fragment>;
            const canSubmit = !shouldFlag 
                || (this.isValidSubmission()
                && (
                    (submissionState !== SubmissionState.INFLIGHT)
                    && (submissionState !== SubmissionState.FINISHED)
                ));
            if (shouldFlag && !this.isValidSubmission()) {
                subText = <React.Fragment>Fix all errors before submitting</React.Fragment>
            } else {
                switch (submissionState) {
                    case SubmissionState.READY:
                        subText = <React.Fragment>Submit</React.Fragment>;
                        break;
                    case SubmissionState.INFLIGHT:
                        subText = <React.Fragment>Submitting...</React.Fragment>;
                        break;
                    case SubmissionState.FINISHED:
                        subText = <React.Fragment>Submission Complete!</React.Fragment>;
                        break;
                    case SubmissionState.FAILED:
                        subText = <React.Fragment>Submission Failed</React.Fragment>;
                        break;
                }
            }
            return (
                <div>
                    <button
                        type="button"
                        className="back-btn"
                        onClick={this.handleBackButton}
                    >
                        Back
                    </button>
                    <h1>Regrade for {homework!.name} {submissionType === undefined ? '' : '(' + submissionType + ')'}</h1>
                    <div className="problem-selector">
                        <div className="problem-config">
                            <SubmissionOption
                                value={submissionType}
                                shouldFlag={shouldFlag && submissionType === undefined}
                                onButtonClick={this.onSelectSubmission}
                            />
                            {
                                shouldFlag && regradeData.length === 0 ? <p className="bad-choice"><em>Select at least one problem to contest</em></p> : null
                            }
                            <ProblemList
                                problems={homework!.problems}
                                onButtonClick={this.onSelectProblem}
                                selectedNames={regradeData.map(r => r.problemName)}
                            />
                        </div>
                        <div>{problems}</div>
                    </div>
                    <button
                        type="button"
                        className={`submit-btn ${!this.isValidSubmission() ? 'no-submit' : ''} ${submissionState === SubmissionState.FINISHED ? 'submit-finished' : ''}`}
                        onClick={this.handleSubmit}
                        disabled={!canSubmit}
                    >
                        {subText}
                    </button>
                </div>
            );
        } else if (hasLoaded.initial) {
            const { TA1, TA2, shouldFlag, homeworks, homework, tas } = this.state;
            return (
                <div className="regrade-card">
                    <h1 className={shouldFlag && homework === undefined ? 'bad-choice' : ''}>
                        Choose a Homework
                    </h1>
                    {
                        shouldFlag && homework === undefined ? <p className="bad-choice"><em>Please choose a homework</em></p> : null
                    }
                    <HomeworkList
                        onButtonClick={this.onSelectHomework}
                        selected={homework === undefined ? -1 : homework.number}
                        shouldFlag={shouldFlag && homework === undefined}
                        homeworks={homeworks!}    
                    />
                    <div className="ta-selectors">
                        <p className={shouldFlag && (TA1 === undefined || TA2 === undefined || TA1.gtUsername === TA2.gtUsername) ? 'bad-choice' : ''}>
                            Select your TAs:
                        </p>
                        <TASelect
                            shouldFlag={shouldFlag && (TA1 === undefined || TA1.gtUsername === TA2?.gtUsername)}
                            TAs={tas!}
                            onChoose={this.onSelectTA1}
                            selected={TA1}
                        />
                        <TASelect
                            shouldFlag={shouldFlag && (TA2 === undefined || TA1?.gtUsername === TA2.gtUsername)}
                            TAs={tas!}
                            onChoose={this.onSelectTA2}
                            selected={TA2}
                        />
                    </div>
                    <button
                        type="button"
                        className="next-btn"
                        onClick={this.handleNextButton}
                    >
                        Next
                    </button>
                </div>
            );
        } else {
            return (
                <div className="homework-loader">
                    <p>Loading...</p>
                </div>
            );
        }
    }
}

export default RegradeCreate;