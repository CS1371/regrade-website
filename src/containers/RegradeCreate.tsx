import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSpinner, faCheck } from '@fortawesome/free-solid-svg-icons';
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
  FAILED
}

interface RegradeCreateState {
  homeworks?: ShallowHomework[];
  homework?: Homework;
  tas?: TA[];
  sections?: Section[];
  submissionType: 'Original' | 'Resubmission' | undefined;
  regradeData: RegradeData[];
  section?: Section;
  shouldFlag: boolean;
  hasLoaded: {
    initial: boolean;
    homework: boolean;
  };
  submissionState: SubmissionState;
}

class RegradeCreate extends React.Component<{}, RegradeCreateState> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      submissionType: undefined,
      regradeData: [],
      shouldFlag: false,
      hasLoaded: {
        initial: false,
        homework: false
      },
      submissionState: SubmissionState.READY
    };
    window.onbeforeunload = (e: Event) => {
      const { submissionState, homework } = this.state;
      if (
        homework !== undefined &&
        submissionState !== SubmissionState.FINISHED
      ) {
        e.preventDefault();
        e.returnValue = false;
      }
    };
    Promise.all([getTAs(), getHomeworks()]).then(resp => {
      // get all section names
      const secs = [...new Set(resp[0].map(t => t.section))];
      const sections: Section[] = secs
        .filter(s => s.trim().length > 0)
        .map(s => {
          return {
            name: s,
            tas: resp[0].filter(t => t.section === s)
          };
        });
      sections.sort((a, b) =>
        a.name < b.name ? -1 : a.name === b.name ? 0 : 1
      );
      const heads = resp[0].filter(
        t =>
          t.title.toLocaleLowerCase() === 'head ta' ||
          t.title.toLocaleLowerCase() === 'course manager'
      );
      sections.push({
        name: "I don't have a recitation",
        tas: heads
      });
      this.setState({
        tas: resp[0],
        sections,
        homeworks: resp[1],
        hasLoaded: {
          initial: true,
          homework: false
        }
      });
    });
  }

  private isInitialValid = (): boolean => {
    const { section, homework } = this.state;
    return section !== undefined && homework !== undefined;
  };

  private onSelectSubmission = (subType?: 'Original' | 'Resubmission') => {
    this.setState({
      submissionType: subType
    });
  };

  private onSelectSection = (ind: number) => {
    const { hasLoaded, sections } = this.state;
    if (hasLoaded.initial && ind >= 0) {
      this.setState(
        {
          section: sections![ind]
        },
        () => {
          const { shouldFlag } = this.state;
          if (this.isInitialValid() && shouldFlag) {
            this.setState({ shouldFlag: false });
          }
        }
      );
    } else {
      this.setState({ section: undefined });
    }
  };

  private onSelectHomework = (i: number) => {
    const { homeworks } = this.state;
    if (homeworks !== undefined) {
      // Get the homework and then update
      getHomework(i).then(hw =>
        this.setState({ homework: hw }, () => {
          const { shouldFlag } = this.state;
          if (this.isInitialValid() && shouldFlag) {
            this.setState({ shouldFlag: false });
          }
        })
      );
    }
  };

  private handleNextButton = () => {
    if (this.isInitialValid()) {
      const { homework } = this.state;
      this.setState({
        hasLoaded: {
          initial: true,
          homework: true
        },
        shouldFlag: false,
        submissionType: homework!.hasResubmission ? undefined : 'Original'
      });
    } else {
      this.setState({ shouldFlag: true });
    }
  };

  private onSelectProblem = (problemName: string) => {
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
        testCases: ['all']
      });
      const probs = homework!.problems;
      regradeData.sort(
        (a, b) =>
          probs.findIndex(p => p.name === a.problemName) -
          probs.findIndex(p => p.name === b.problemName)
      );
    }
    this.setState({ regradeData });
  };

  private onSelectTestCase = (
    problemName: string,
    testCase: string | number,
    enable: boolean
  ) => {
    const { regradeData } = this.state;
    const ind = regradeData.findIndex(p => p.problemName === problemName);
    if (testCase === 'all') {
      regradeData[ind].testCases = ['all'];
    } else if (testCase === 'none') {
      regradeData[ind].testCases = [];
    } else {
      if (
        regradeData[ind].testCases.length === 1 &&
        regradeData[ind].testCases[0] === 'all'
      ) {
        regradeData[ind].testCases = [];
      }
      if (enable) {
        regradeData[ind].testCases.push(testCase);
      } else {
        regradeData[ind].testCases = regradeData[ind].testCases.filter(
          i => i !== testCase
        );
      }
    }
    this.setState({ regradeData });
  };

  private onTextUpdate = (newValue: string, problemName: string) => {
    const { regradeData } = this.state;
    regradeData[
      regradeData.findIndex(p => p.problemName === problemName)
    ].description = newValue;
    this.setState({ regradeData });
  };

  private handleBackButton = () => {
    this.setState({
      hasLoaded: {
        initial: true,
        homework: false
      }
    });
  };

  private isValidSubmission = (): boolean => {
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
  };

  private handleSubmit = () => {
    const { regradeData } = this.state;
    if (this.isValidSubmission()) {
      const { section, homework, submissionType } = this.state;
      const toSubmit: Payload = {
        problems: regradeData.map(
          (r): RegradeData => {
            return {
              ...r,
              testCases: r.testCases.map(t =>
                typeof t === 'string' ? t : t + 1
              )
            };
          }
        ),
        section: section!,
        homeworkNumber: homework!.number,
        submissionType: submissionType!
      };
      this.setState({ submissionState: SubmissionState.INFLIGHT });
      createCard(toSubmit).then(r => {
        if (r.status === 200) {
          this.setState({ submissionState: SubmissionState.FINISHED });
          window.setTimeout(() => {
            window.location.href = 'https://cs1371.gatech.edu/regrades';
          }, 1000);
        } else {
          this.setState({ submissionState: SubmissionState.FAILED });
        }
      });
    } else {
      this.setState({ shouldFlag: true });
      console.log('Failed to submit');
    }
  };

  public render() {
    const { hasLoaded } = this.state;
    if (hasLoaded.homework) {
      const {
        homework,
        submissionType,
        regradeData,
        shouldFlag,
        submissionState
      } = this.state;
      const problems = regradeData.map(problem => {
        const pFlag =
          problem.description.length < 20 || problem.testCases.length === 0;
        return (
          <React.Fragment key={problem.problemName}>
            <hr
              key={problem.problemName + 'hr'}
              className="problem-separator"
            />
            <Problem
              key={problem.problemName + 'prob'}
              shouldFlag={shouldFlag && pFlag}
              problem={
                homework!.problems.find(p => p.name === problem.problemName)!
              }
              onButtonClick={this.onSelectTestCase}
              onTextUpdate={this.onTextUpdate}
              testCases={problem.testCases}
              description={problem.description}
            />
          </React.Fragment>
        );
      });
      let subText: JSX.Element = <React.Fragment>Submit</React.Fragment>;
      const canSubmit =
        !shouldFlag ||
        (this.isValidSubmission() &&
          submissionState !== SubmissionState.INFLIGHT &&
          submissionState !== SubmissionState.FINISHED);
      if (shouldFlag && !this.isValidSubmission()) {
        subText = (
          <React.Fragment>
            <FontAwesomeIcon icon={faTimes} /> &nbsp;Fix all errors before
            submitting
          </React.Fragment>
        );
      } else {
        switch (submissionState) {
          case SubmissionState.READY:
            subText = <React.Fragment>Submit</React.Fragment>;
            break;
          case SubmissionState.INFLIGHT:
            subText = (
              <React.Fragment>
                <FontAwesomeIcon icon={faSpinner} spin />
              </React.Fragment>
            );
            break;
          case SubmissionState.FINISHED:
            subText = (
              <React.Fragment>
                <FontAwesomeIcon icon={faCheck} /> &nbsp;Submission Complete!
              </React.Fragment>
            );
            break;
          case SubmissionState.FAILED:
            subText = (
              <React.Fragment>
                <FontAwesomeIcon icon={faTimes} /> &nbsp;Submission Failed.
                Please check your internet connection and try again
              </React.Fragment>
            );
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
          <h1>
            Regrade for{' '}
            {homework!.name === undefined
              ? `Homework #${homework!.number}`
              : homework!.name!}{' '}
            {submissionType === undefined ? '' : '(' + submissionType + ')'}
          </h1>
          <div className="problem-selector">
            <div className="problem-config">
              {homework!.hasResubmission ? (
                <SubmissionOption
                  value={submissionType}
                  shouldFlag={shouldFlag && submissionType === undefined}
                  onButtonClick={this.onSelectSubmission}
                />
              ) : null}
              {shouldFlag && regradeData.length === 0 ? (
                <p className="bad-choice">
                  <em>Select at least one problem to contest</em>
                </p>
              ) : null}
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
                            ${
                              submissionState === SubmissionState.FAILED
                                ? 'failed-submission'
                                : ''
                            } 
                            ${!this.isValidSubmission() ? 'no-submit' : ''} 
                            ${
                              submissionState === SubmissionState.FINISHED
                                ? 'submit-finished'
                                : ''
                            }`}
            onClick={this.handleSubmit}
            disabled={!canSubmit}
          >
            {subText}
          </button>
        </div>
      );
    } else if (hasLoaded.initial) {
      const { section, shouldFlag, homeworks, homework, sections } = this.state;
      if (homeworks!.length === 0) {
        // No homeworks; say so
        return (
          <div className="regrade-card">
            <h1>No homework has been found</h1>
            <p className="bad-choice">
              <em>
                This is probably because no homework has been graded yet! If you
                think this is a mistake, reach out to your TA!
              </em>
            </p>
          </div>
        );
      }
      return (
        <div className="regrade-card">
          <h1
            className={shouldFlag && homework === undefined ? 'bad-choice' : ''}
          >
            Choose a Homework
          </h1>
          {shouldFlag && homework === undefined ? (
            <p className="bad-choice">
              <em>Please choose a homework</em>
            </p>
          ) : null}
          <HomeworkList
            onButtonClick={this.onSelectHomework}
            selected={homework === undefined ? -1 : homework.number}
            shouldFlag={shouldFlag && homework === undefined}
            homeworks={homeworks!}
          />
          <div className="ta-selectors">
            <p
              className={
                shouldFlag && section === undefined ? 'bad-choice' : ''
              }
            >
              Select your Section:
            </p>
            <div className="ta-select-container">
              <SectionSelect
                shouldFlag={shouldFlag && section === undefined}
                sections={sections!}
                onChoose={this.onSelectSection}
                selected={section}
              />
            </div>
          </div>
          <button
            type="button"
            className={`next-btn ${shouldFlag ? 'bad-choice' : ''}`}
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
