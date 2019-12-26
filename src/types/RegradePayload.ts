import RegradeData from './Regrade';
import TA from './TA';

export default interface Payload {
    problems: RegradeData[];
    homeworkName: string;
    homeworkNumber: number;
    submissionType: "Original"|"Resubmission";
    TA1: TA;
    TA2: TA;
};