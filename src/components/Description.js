import React from 'react';

class Description extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	textvalue: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
    	this.setState({
    		textvalue: e.target.value
    	});
    	this.props.onTextUpdate(e.target.value, this.props.problem);
    }

    render() {
        return(
        	<div>
     			<h3>Justification</h3>
        		<textarea
        			type="text"
        			rows="4"
        			cols="50"
        			value={this.state.value}
        			onChange={this.handleChange}>
        		</textarea>
        	</div>
        );
    }

}

export default Description;