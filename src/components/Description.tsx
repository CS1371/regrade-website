import React from 'react';
import Problem from '../types/Problem';

interface DescriptionProps {
	onTextUpdate: (desc: string, problemName: string) => void;
	problem: Problem;
};

interface DescriptionState {
	textValue: string;
};

class Description extends React.Component<DescriptionProps, DescriptionState> {
    constructor(props: DescriptionProps) {
        super(props);
        this.state = {
        	textValue: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(desc: string) {
		const { onTextUpdate, problem } = this.props;
    	this.setState({ textValue: desc });
    	onTextUpdate(desc, problem.name);
    }

    render() {
        return(
        	<div>
     			<h3>Justification</h3>
        		<textarea
        			rows={4}
        			cols={50}
        			value={this.state.textValue}
        			onChange={e => this.handleChange(e.target.value)}
				>
        		</textarea>
        	</div>
        );
    }

}

export default Description;