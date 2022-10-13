import styled from 'styled-components';

const StyledSection = styled.section`
    width: 600px;
    margin-left: auto;
    margin-right: auto;
    margin-top: ${p => p.theme.space[7]}px;
`

const StyledTitle = styled.h1`
    margin-bottom: ${p => p.theme.space[4]}px;
`
export {StyledSection, StyledTitle}