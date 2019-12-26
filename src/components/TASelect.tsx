import React from 'react';
import TA from '../types/TA';
import './TASelect.css';
interface TASelectProps {
	onChoose: (taIndex: number) => void;
	TAs: TA[];
	selected?: TA;
	shouldFlag: boolean;
}

const TASelect: React.FunctionComponent<TASelectProps> = ({ onChoose, TAs, selected, shouldFlag }) => {
	const options = TAs.map((t, i) => <option value={i} key={t.name}>{t.name}</option>);
	return (
		<select
			className={`ta-selector ${shouldFlag ? 'no-selection' : ''}`}
			defaultValue={(selected === undefined) ? -1 : TAs.findIndex(t => t.gtUsername === selected.gtUsername)}
			onChange={e => onChoose(parseInt(e.target.value))}
		>
			<option value={-1} key="default">-- Choose a TA</option>
			{options}
		</select>
	);
};

export default TASelect;