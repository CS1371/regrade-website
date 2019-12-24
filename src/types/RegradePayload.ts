import RegradeData from './Regrade';

export default interface Payload {
    problems: RegradeData[];
    homeworkName: string;
    homeworkNumber: number;
    submissionType: "Original"|"Resubmission";
    TA1: string;
    TA2: string;
};