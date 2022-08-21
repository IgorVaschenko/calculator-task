import styled from 'styled-components'

export const Error = styled.div`
    width: ${props => props.theme.width[8]}px;
    height:${props => props.theme.height[7]}px;
    font-size: ${props => props.theme.fontSize[6]}rem;
    padding: ${props => props.theme.spaces[5]}px;
    margin: ${props => props.theme.spaces[0]}px auto;
    color: ${props => props.theme.colors.errorTextColor};
    background-color: ${props => props.theme.colors.errorBackgroundColor};
    border: 2px solid ${props => props.theme.colors.calcBorder};
    display: flex;
    justify-content: center;
    align-items: center;
    owerflow: hidden
`