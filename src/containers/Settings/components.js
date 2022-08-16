import React from 'react'
import styled from 'styled-components'


export const SettingsWrapper = styled.div`
    background-color: ${props => props.theme.colors.backgroundColor};
    color: ${props => props.theme.colors.textColor};
    display: flex;
    height: 90vh;
    flex-direction: column;
    padding: 30px;
    font-size: 5vh;
`

export const SelectThemeContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 2vh;
    margin: 20px;
`
export const Selector = styled.select`
    background-color: ${props => props.theme.colors.backgroundColor};
    color: ${props => props.theme.colors.textColor};
    padding-left: 20px;
    width: 25vw;
    height: 10vh;
    font-size: 3vh;
    border: 1px solid #CBCBCB;
    border-radius: 5px;
`
export const ClearButton = styled.button`
    width: 25vw;
    height: 10vh;
    font-size: 3vh;
    cursor: pointer;
    background-color: ${props => props.theme.colors.backgroundColor};
    color: ${props => props.theme.colors.textColor};
    border: 1px solid #CBCBCB;
    border-radius: 5px;
    margin: 10px 20px;
    &:hover{
        background-color: ${props => props.buttonsColorHover};
    }
`
