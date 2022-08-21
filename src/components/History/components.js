import styled from 'styled-components'

export const History = styled.div`
    width: ${props => props.theme.width[3]}px;
    height:${props => props.theme.height[6]}px;
    color: ${props => props.theme.colors.textColorHistory};
    font-size: ${props => props.theme.fontSize[7]}rem;
    padding-left: ${props => props.theme.spaces[5]}px;
    margin: ${props => props.theme.spaces[4]}px 0;
    overflow: auto;
`
