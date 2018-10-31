import React from 'react';
import ReactDOM from 'react-dom';

class RequestForm extends React.Component {
	render() {
		var testVal = "Hello world";
		return (
			<div>
			<button onClick={fetchData} >Click</button>
			<p>Words...</p>
			</div>
		);
	}
}

function fetchData() {
	fetch('http://localhost/fetchTest.php', {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			//body: 'hello=1234'
			body: JSON.stringify({
				hello: '1234'
			})
		})
		.then(txt => {
			console.log(txt.text());
		});
}

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
	// fetch('localhost/fetchTest.php', {
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

// List of Homeworks
// Submission type
// Which problems
// Which test cases
// Justification
// Don't need name/username/section

ReactDOM.render(
	<RequestForm />,
	document.getElementById('root')
);