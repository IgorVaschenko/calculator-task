import styled from 'styled-components'

export const Header = styled.div`
    width: ${props => props.theme.width[1]}%;
    height:${props => props.theme.height[2]}px;
    font-size: ${props => props.theme.fontSize[1]}rem;
    padding:${props => props.theme.spaces[4]}px ${props => props.theme.spaces[5]}px;
    color: ${props => props.theme.colors.textColorHeader};
    background-color: ${props => props.theme.colors.backgroundColorHeader};
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`
export const CalculatorApp = styled.div`
    color: ${props => props.theme.colors.textColorHeader};
`