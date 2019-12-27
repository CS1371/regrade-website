import React from 'react';
import Section from '../types/Section';
import './SectionSelect.css';
interface SectionSelectProps {
	onChoose: (sectionIndex: number) => void;
	sections: Section[];
	selected?: Section;
	shouldFlag: boolean;
}

const SectionSelect: React.FunctionComponent<SectionSelectProps> = ({ onChoose, sections, selected, shouldFlag }) => {
	const options = sections.map((s, i) => (
		<option value={i} key={s.name}>
			{s.name} - ({s.tas.map(t => t.name).join(', ')})
		</option>
	));
	return (
		<select
			className={`section-selector ${shouldFlag ? 'no-selection' : ''}`}
			defaultValue={(selected === undefined) ? -1 : sections.findIndex(s => selected !== undefined && s.name === selected.name)}
			onChange={e => onChoose(parseInt(e.target.value))}
		>
			<option value={-1} key="default">-- Choose a Section</option>
			{options}
		</select>
	);
};

export default SectionSelect;