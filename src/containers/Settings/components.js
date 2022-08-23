import styled from 'styled-components'

export const SettingsWrapper = styled.div`
    background-color: ${props => props.theme.colors.backgroundColor};
    color: ${props => props.theme.colors.textColor};
    font-size: ${props => props.theme.fontSize[5]}rem;
    padding: ${props => props.theme.spaces[6]}px;
    display: flex;
    flex-direction: column;
`

export const SelectThemeContainer = styled.div`
    font-size: ${props => props.theme.fontSize[1]}rem;
    padding:  ${props => props.theme.spaces[4]}px;
    display: flex;
    flex-direction: column;
`
export const Selector = styled.select`
    width: ${props => props.theme.width[4]}px;
    height:${props => props.theme.height[2]}px;
    background-color: ${props => props.theme.colors.backgroundColor};
    color: ${props => props.theme.colors.textColor};
    padding-left: ${props => props.theme.spaces[4]}px;
    font-size: ${props => props.theme.fontSize[2]}rem;
    border: 1px solid ${props => props.theme.colors.calcBorder};
    border-radius: ${props => props.theme.spaces[2]}px;
    cursor: pointer;
`
export const ClearButton = styled.button`
    width: ${props => props.theme.width[4]}px;
    height:${props => props.theme.height[2]}px;
    background-color: ${props => props.theme.colors.backgroundColor};
    color: ${props => props.theme.colors.textColor};
    padding-left: ${props => props.theme.spaces[4]}px;
    font-size: ${props => props.theme.fontSize[2]}rem;
    border: 1px solid ${props => props.theme.colors.calcBorder};
    border-radius: ${props => props.theme.spaces[2]}px;
    margin: ${props => props.theme.spaces[2]}px ${props => props.theme.spaces[3]}px;
    cursor: pointer;
    
    &:hover{
        background-color: ${props => props.theme.colors.buttonsColorHover};
    }
`
