import Problem from './Problem';

export interface ShallowHomework {
    name?: string;
    number: number;
    hasResubmission: boolean;
};

export interface Homework extends ShallowHomework {
    problems: Problem[];
};