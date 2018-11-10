import React from 'react';
import ButtonObject from '../components/ButtonObject';

class SubmissionOption extends React.Component {
    // Props:
    // onButtonClick
    render() {
        return (
            <span>
                <ButtonObject
                    name="Original"
                    onButtonClick={this.props.onButtonClick} />
                <ButtonObject
                    name="Resubmission"
                    onButtonClick={this.props.onButtonClick} />
            </span>
        );
    }
}

export default SubmissionOption;