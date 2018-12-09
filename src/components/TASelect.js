import React from 'react';

class TASelect extends React.Component {

	constructor(props) {
		super(props);
		this.onChoose = this.onChoose.bind(this);
	}

	onChoose(e) {
		this.props.onChoose(e.target.value);
	}

	render() {
		var options = this.props.TAs.map(name => {
			return (
				<option value={name} key={name}>{name}</option>
			);
		});
		return (
			<select
				defaultValue={this.props.selected}
				onChange={this.onChoose}>
				{options}
			</select>
		);
	}
}

export default TASelect;