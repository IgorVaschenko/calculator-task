import styled from "styled-components"

export const HistoryList = styled.ul`
    font-size: ${props => props.theme.fontSize[2]}rem;
    margin: ${props => props.theme.spaces[4]}px;
    list-style-type: none;
`

export const HistoryUnit = styled.li`
    font-size: ${props => props.theme.fontSize[2]}rem;
    padding: ${props => props.theme.spaces[2]}px ${props => props.theme.spaces[0]}px;
    color: ${props => props.theme.colors.history};
`

