import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSpinner, faCheck } from '@fortawesome/free-solid-svg-icons'
import Problem from '../components/Problem';
import HomeworkList from '../components/HomeworkList';
import SubmissionOption from '../components/SubmissionOption';
import SectionSelect from '../components/SectionSelect';
import ProblemList from '../components/ProblemList';
import { createCard, getHomeworks, getHomework, getTAs } from '../api';
import './RegradeCreate.css';
import RegradeData from '../types/Regrade';
import Payload from '../types/RegradePayload';
import { ShallowHomework, Homework } from '../types/Homework';
import TA from '../types/TA';
import Section from '../types/Section';

enum SubmissionState {
    READY,
    INFLIGHT,
    FINISHED,
    FAILED,
};

interface RegradeCreateState {
    homeworks?: ShallowHomework[];
    homework?: Homework;
    tas?: TA[];
    sections?: Section[];
    submissionType: "Original"|"Resubmission"|undefined;
    regradeData: RegradeData[];
    section?: Section;
    shouldFlag: boolean;
    hasLoaded: {
        initial: boolean;
        homework: boolean;
    };
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
        this.onSelectSection = this.onSelectSection.bind(this);
        this.handleNextButton = this.handleNextButton.bind(this);

        Promise.all([
            getTAs(),
            getHomeworks(),
        ])
        .then(resp => {
            // get all section names
            const secs = [...new Set(resp[0].map(t => t.section))];
            const sections: Section[] = secs.map(s => {
                return {
                    name: s,
                    tas: resp[0].filter(t => t.section === s),
                };
            });
            this.setState({
                tas: resp[0],
                sections,
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

    onSelectSection(ind: number) {
        const { hasLoaded, sections } = this.state;
        if (hasLoaded.initial && ind >= 0) {
            this.setState({
                section: sections![ind],
            });
        } else {
            this.setState({ section: undefined});
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
        const { section, homework } = this.state;
        let validData = true;
        if (section === undefined) {
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
            const { section, homework, submissionType } = this.state;
            const toSubmit: Payload = {
                problems: regradeData,
                section: section!,
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
                subText = <React.Fragment><FontAwesomeIcon icon={faTimes}/> &nbsp;Fix all errors before submitting</React.Fragment>
            } else {
                switch (submissionState) {
                    case SubmissionState.READY:
                        subText = <React.Fragment>Submit</React.Fragment>;
                        break;
                    case SubmissionState.INFLIGHT:
                        subText = <React.Fragment><FontAwesomeIcon icon={faSpinner} spin/></React.Fragment>;
                        break;
                    case SubmissionState.FINISHED:
                        subText = <React.Fragment><FontAwesomeIcon icon={faCheck}/> &nbsp;Submission Complete!</React.Fragment>;
                        break;
                    case SubmissionState.FAILED:
                        subText = <React.Fragment><FontAwesomeIcon icon={faTimes}/> &nbsp;Submission Failed. Please check your internet connection and try again</React.Fragment>;
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
                    <h1>Regrade for {homework!.name === undefined ? homework!.number : homework!.name!} {submissionType === undefined ? '' : '(' + submissionType + ')'}</h1>
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
                        className={`submit-btn 
                            ${submissionState === SubmissionState.FAILED ? 'failed-submission' : ''} 
                            ${!this.isValidSubmission() ? 'no-submit' : ''} 
                            ${submissionState === SubmissionState.FINISHED ? 'submit-finished' : ''}`}
                        onClick={this.handleSubmit}
                        disabled={!canSubmit}
                    >
                        {subText}
                    </button>
                </div>
            );
        } else if (hasLoaded.initial) {
            const { section, shouldFlag, homeworks, homework, sections } = this.state;
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
                        <p className={shouldFlag && section === undefined ? 'bad-choice' : ''}>
                            Select your Section:
                        </p>
                        <SectionSelect
                            shouldFlag={shouldFlag && section === undefined}
                            sections={sections!}
                            onChoose={this.onSelectSection}
                            selected={section}
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