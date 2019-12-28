import RegradeData from './Regrade';
import Section from './Section';

export default interface Payload {
    problems: RegradeData[];
    homeworkName: string;
    homeworkNumber: number;
    submissionType: "Original"|"Resubmission";
    section: Section;
};