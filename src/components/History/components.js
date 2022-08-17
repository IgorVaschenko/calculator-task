import styled from 'styled-components'
import darkTheme from '@/themes/darkTheme'
import lightTheme from '@/themes/lightTheme'

export const History = styled.div`
    width: ${props => props.theme.width[2]}px;
    height:${props => props.theme.height[5]}px;
    color: ${props => props.theme.colors.textColorHistory};
    border-left: 1px solid ${props => props.theme.colors.border};
    font-size: ${props => props.theme.fontSize[6]}rem;
    margin: ${props => props.theme.spaces[4]}px;
    padding-left: ${props => props.theme.spaces[5]}px;
    overflow: auto;
`
