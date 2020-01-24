import React from 'react';
import './SubmissionOption.css';

interface SubmissionOptionProps {
  shouldFlag: boolean;
  value?: 'Original' | 'Resubmission';
  onButtonClick: (val: 'Original' | 'Resubmission') => void;
}

const SubmissionOption: React.FC<SubmissionOptionProps> = ({
  onButtonClick,
  shouldFlag,
  value
}) => (
  <span className={`submission-option ${shouldFlag ? 'bad-submission' : ''}`}>
    {shouldFlag ? (
      <p>
        <em>Please select a submission type</em>
      </p>
    ) : null}
    <button
      className={value === 'Original' ? 'sub-selected' : ''}
      type="button"
      value="Original"
      onClick={() => onButtonClick('Original')}
    >
      Original
    </button>
    <button
      className={value === 'Resubmission' ? 'sub-selected' : ''}
      type="button"
      value="Resubmission"
      onClick={() => onButtonClick('Resubmission')}
    >
      Resubmission
    </button>
  </span>
);

export default SubmissionOption;
