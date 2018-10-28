import React from 'react';
import ReactDOM from 'react-dom';


class RegradeForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			homeworkNumber: 0,
			homeworkName: '',
			submissionType: '',
			problemList: new Map([
				['Problem 1', true],
				['Problem 2', false],
				['Problem 3', false],
				['Problem 4', false],
				['Problem 5', false]]),
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
		problems[problem] = !problems[problem];
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
			console.log(this.state.problemList);
			var list = Object.keys(this.state.problemList).map((name) => {
				console.log(this.state.problemList[name]);
				var isSelected = this.state.problemList[name];
				if (isSelected) {
					return (
						<li key={name}>
							{name}
						</li>
					);
				}
				console.log('null');
				return null;
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
			let testVal = this.state.homeworkNumber;

		// GET REQUEST
			// fetch('http://httpbin.org/get', {
			// 	method: 'get',
			// 	headers: {
			// 		'accept': 'application/json'
			// 	},
			// })
			// .then((response) => {
			// 	response.json().then(json => {
			// 		console.log(json);
			// 	});
			// });

		// POST REQUEST
			// fetch('http://httpbin.org/post', {
			// 	method: 'post',
			// 	headers: {
			// 		'accept': 'application/json'
			// 	},
			// 	body: 'test=testVal'
			// })
			// .then(response => {
			// 	response.json().then(json => {
			// 		console.log(json);
			// 	});
			// });
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
		return <ol>{list}</ol>;
	}
}

class TestCases extends React.Component {

	// constructor(props) {
	// 	super(props);

		// this.state = {
		// 	problems: [
		// 		'Problem 1',
		// 		'Problem 3']
		// };
	// }

	render() {
		console.log(this.props.problemList);
		var problems = [];
		for (var [problem, selected] of this.props.problemList.entries()) {
			console.log(problem);
			if (selected) {
				console.log(problem);
				problems.push(problem);
			}
		}
		console.log(problems);
		var display;
		const TESTCASES = [
			'TestCase 1',
			'TestCase 2',
			'TestCase 3'];
		display = problems.map(problem => {
			return (
				<div key={problem}>
					<p>{problem}</p>
					<ol>
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