import React from 'react';
import styled from 'styled-components';


export const CalcAndHistory = styled.div`
    background-color: white;
    display: flex;
    height: 80vh;
    flex-direction: row;
`

export const CalculatorWrapper = styled.div`
    flex-grow: 3;
    background-color: white;
    flex-direction: column;
`
export const ButtonsWrapper = styled.div`
    width: 65vw;
    display: flex;
    flex-wrap: wrap; 
    align-content: flex-end;
    justify-content: flex-end;
    margin: 2vw auto;
`

export const CalcButton = styled.button`
    width: 5vw;   
    height: 5vw;
    margin: 1vw 3.8vw;
    border-radius: 1vw;
    font-size: 2vw;
    font-weight: 500; 
    background-color: #F2F2F2;
    cursor: pointer;
    border: 1px solid #CBCBCB;
    &: hover{   
        background-color: #B5B5B5;
    }
`

export const EqualButton = styled.button` 
    width: 30.2vw;   
    height: 5vw;   
    margin: 1vw 3.8vw;
    border-radius: 1vw;
    font-size: 2vw;
    font-weight: 500; 
    background-color: #F2F2F2;
    cursor: pointer;
    border: 1px solid #CBCBCB;
    &: hover{   
        background-color: #B5B5B5;
    }
`