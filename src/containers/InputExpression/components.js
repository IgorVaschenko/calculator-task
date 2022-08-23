import styled from 'styled-components'

export const DisplayExpression = styled.div`
    width: ${props => props.theme.width[8]}px;
    height:${props => props.theme.height[1]}px;
    padding: ${props => props.theme.spaces[3]}px ${props => props.theme.spaces[5]}px;
    font-size: ${props => props.theme.fontSize[1]}rem;
    color: ${props => props.theme.colors.history};
    text-align: right;
    overflow: hidden;
`

