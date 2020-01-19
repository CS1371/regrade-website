import React from 'react';
import Problem from '../types/Problem';
import './Description.css';

const MIN_TEXT_LEN = 20;

interface DescriptionProps {
	onTextUpdate: (desc: string, problemName: string) => void;
	problem: Problem;
	text: string;
	shouldFlag: boolean;
};

interface DescriptionState {
	textValue: string;
};

const Description: React.FunctionComponent<DescriptionProps> = ({ onTextUpdate, problem, text, shouldFlag }) => {
        return(
        	<div>
     			<h3 className={`${shouldFlag ? 'bad-choice' : ''}`}>
					Justification
				</h3>
				{
					shouldFlag
					? <p className="bad-choice"><em>{`Please type more for your justification (${MIN_TEXT_LEN - text.length} more character(s) to go!)`}</em></p>
					: null
				}
        		<textarea
					className={`justification-description ${shouldFlag ? 'bad-choice' : ''}`}
        			rows={4}
        			cols={50}
					value={text}
					placeholder="Type your justification here..."
        			onChange={e => onTextUpdate(e.target.value, problem.name)}
				>
        		</textarea>
        	</div>
        );

}

export default Description;