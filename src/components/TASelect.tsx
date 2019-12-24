import React from 'react';

interface TASelectProps {
	onChoose: (ta: string) => void;
	TAs: string[];
	selected: string;
}

const TASelect: React.FunctionComponent<TASelectProps> = ({ onChoose, TAs, selected }) => {
	const options = TAs.map(name => <option value={name} key={name}>{name}</option>);
	return (
		<select
			defaultValue={selected}
			onChange={e => onChoose(e.target.value)}
		>
			{options}
		</select>
	);
};

export default TASelect;