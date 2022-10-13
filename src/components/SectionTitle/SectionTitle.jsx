import {StyledSection, StyledTitle} from './SectionTitle.styled'
import PropTypes from 'prop-types';

const SectionTitle = ({ title, children }) => { 
    return (
        <StyledSection>
            <StyledTitle>{title}</StyledTitle>
            {children}
        </StyledSection>
    )
}

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
};

export default SectionTitle;