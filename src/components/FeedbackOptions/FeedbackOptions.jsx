import {StyledButton, StyledDiv} from './FeedbackOptions.styled'
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback, options }) => { 
    return (
        <StyledDiv>
            {options.map(key => (<StyledButton key={key} onClick={onLeaveFeedback}>{key}</StyledButton>))}
        </StyledDiv>
    )
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
};

export default FeedbackOptions;






