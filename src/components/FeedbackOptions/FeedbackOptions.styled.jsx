import styled from 'styled-components';

const StyledButton = styled.button`
    margin-right: ${p => p.theme.space[3]}px;
    cursor: pointer;
`
const StyledDiv = styled.div`
    margin-bottom: ${p => p.theme.space[5]}px;
`

export {StyledButton, StyledDiv}