import { StyledTitle } from "./Statistics.styled";
import PropTypes from 'prop-types';

const Statistics = ({ title, goodFeedback, neutralFeedback, badFeedback, totalFeedback, positiveFeedback }) => { 
    return (
    <div>
        <StyledTitle>{title}</StyledTitle>
        <ul>
            <li>Good: <span>{goodFeedback}</span></li>
            <li>Neutral: <span>{neutralFeedback}</span></li>
            <li>Bad: <span>{badFeedback}</span></li>
            <li>Total: <span>{totalFeedback}</span></li>    
            <li>Positive feedback: <span>{positiveFeedback}%</span></li>
        </ul>
    </div>
    )
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    goodFeedback: PropTypes.number.isRequired,
    neutralFeedback: PropTypes.number.isRequired,
    badFeedback: PropTypes.number.isRequired,
    totalFeedback: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.number.isRequired,
};

export default Statistics;