import {StyledButton, StyledDiv} from './FeedbackOptions.styled'
import PropTypes from 'prop-types';

const FeedbackOptions = ({ good, neutral, bad }) => { 
    return (
        <StyledDiv>
            <StyledButton type="button" onClick={good}>
                Good
            </StyledButton>
            <StyledButton type="button" onClick={neutral}>
                Neutral
            </StyledButton>
            <StyledButton type="button" onClick={bad}>
                Bad
            </StyledButton>
        </StyledDiv>
    )
}

FeedbackOptions.propTypes = {
    good: PropTypes.func,
    neutral: PropTypes.func,
    bad: PropTypes.func,
};

export default FeedbackOptions;






