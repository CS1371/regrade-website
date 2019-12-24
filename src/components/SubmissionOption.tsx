import React from 'react';

interface SubmissionOptionProps {
    onButtonClick: (val: "Original"|"Resubmission") => void;
};

const SubmissionOption: React.FunctionComponent<SubmissionOptionProps> = ({ onButtonClick }) => (
    <span>
        <button
            value="Original"
            onClick={() => onButtonClick('Original')}
        >
            Original
        </button>
        <button
            value="Resubmission"
            onClick={() => onButtonClick('Resubmission')}
        >
            Resubmission
        </button>
    </span>
);

export default SubmissionOption;