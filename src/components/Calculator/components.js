import styled from 'styled-components'
import lightTheme from '@/themes/lightTheme'
import darkTheme from '@/themes/darkTheme'

export const CalcAndHistory = styled.div`
    background: ${props => props.theme.colors.backgroundColor};
    height:${props => props.theme.height[6]}px;
    display: flex;
    flex-direction: row;
`

export const CalculatorWrapper = styled.div``

export const ButtonsWrapper = styled.div`
    width: ${props => props.theme.width[9]}px;
    display: flex;
    flex-wrap: wrap; 
    align-content: flex-end;
    justify-content: flex-end;
    margin: ${props => props.theme.spaces[4]}px auto;
`

export const CalcButton = styled.button`
    width: ${props => props.theme.width[12]}px;
    height:${props => props.theme.height[11]}px;
    margin: ${props => props.theme.spaces[2]}px ${props => props.theme.spaces[6]}px;
    border-radius: ${props => props.theme.spaces[3]}px;
    font-size: ${props => props.theme.fontSize[5]}rem;
    background: ${props => props.theme.colors.buttonsColor};
    color: ${props => props.theme.colors.textColorButton};
    cursor: pointer;
    border: 1px solid ${props => props.theme.colors.calcBorder};
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
    cursor: pointer;
    border: 1px solid ${props => props.theme.colors.calcBorder};
    &: hover{   
        background-color: ${props => props.theme.colors.buttonsColorHover};
    }
`