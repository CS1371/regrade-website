import Problem from './Problem';

export interface ShallowHomework {
    number: number;
    hasResubmission: boolean;
};

export interface Homework extends ShallowHomework {
    problems: Problem[];
};