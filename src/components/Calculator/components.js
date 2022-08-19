import styled from 'styled-components'

export const CalcAndHistory = styled.div`
    background: ${props => props.theme.colors.backgroundColor};
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

export const CalculatorWrapper = styled.div`
    margin-right: ${props => props.theme.spaces[4]}px;
`

export const ButtonsWrapper = styled.div`
    width: ${props => props.theme.width[9]}px;
    margin: ${props => props.theme.spaces[4]}px auto;
    display: flex;
    flex-wrap: wrap; 
    align-content: flex-end;
    justify-content: flex-end;
`

export const CalcButton = styled.button`
    width: ${props => props.theme.width[12]}px;
    height:${props => props.theme.height[11]}px;
    margin: ${props => props.theme.spaces[2]}px ${props => props.theme.spaces[6]}px;
    border-radius: ${props => props.theme.spaces[3]}px;
    font-size: ${props => props.theme.fontSize[5]}rem;
    background: ${props => props.theme.colors.buttonsColor};
    color: ${props => props.theme.colors.textColorButton};
    border: 1px solid ${props => props.theme.colors.calcBorder};
    cursor: pointer;
    
    &: hover{   
        background-color: ${props => props.theme.colors.buttonsColorHover};
    }
`

export const EqualButton = styled.button` 
    width: ${props => props.theme.width[4]}px;   
    height:${props => props.theme.height[11]}px;
    margin: ${props => props.theme.spaces[2]}px ${props => props.theme.spaces[6]}px;
    border-radius: ${props => props.theme.spaces[3]}px;
    font-size: ${props => props.theme.fontSize[5]}rem; 
    background: ${props => props.theme.colors.buttonsColor};
    color: ${props => props.theme.colors.textColorButton};
    border: 1px solid ${props => props.theme.colors.calcBorder};
    cursor: pointer;
    
    &: hover{   
        background-color: ${props => props.theme.colors.buttonsColorHover};
    }
`