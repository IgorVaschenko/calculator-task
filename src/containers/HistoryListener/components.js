import styled from "styled-components"
import darkTheme from '@/themes/darkTheme'
import lightTheme from '@/themes/lightTheme'

export const HistoryList = styled.ul`
    font-size: ${props => props.theme.fontSize[2]}rem;
    list-style-type: none;
    margin: ${props => props.theme.spaces[4]}px;
`

export const HistoryUnit = styled.li`
    font-size: ${props => props.theme.fontSize[2]}rem;
    padding: ${props => props.theme.spaces[2]}px ${props => props.theme.spaces[0]}px;
    color: ${props => props.theme.colors.history};
`

