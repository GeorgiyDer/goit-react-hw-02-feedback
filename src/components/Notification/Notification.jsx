import { StyledTitle } from "./Notification.styled";
import PropTypes from 'prop-types';

const Notification = ({title, message}) => { 
    return (
        <div>
            <StyledTitle>{title}</StyledTitle>
            <p>{message}</p>
        </div>
        
    )
}

Notification.propTypes = {
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
};

export default Notification;