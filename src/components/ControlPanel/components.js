import React from 'react';
import styled from 'styled-components';


export const ControlPanelWrapper = styled.div`
    ${'' /* background-color: #FFFFFF; */}
    background-color: ${props => props.white};
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
    background-color: #FFFFFF;
    background-color: ${props => props.white};
    border: 1px solid #CBCBCB;
    border-radius: 5px;
    margin: 10px 20px;
    &:hover{
        ${'' /* background-color: #B5B5B5; */}
        background-color: ${props => props.buttonsColorHover};
    }
`
