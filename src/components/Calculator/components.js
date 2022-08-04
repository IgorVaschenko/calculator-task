import React from 'react';
import styled from 'styled-components';

export const CalculatorWrapper = styled.div`
    grid-area: calculator;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
`
export const CalcResult = styled.div`
    margin: 0 10px;
    border-bottom: 1px solid black;
    font-size: 2rem;
    width: 100%;
    text-align: right;
    transform-origin: right bottom;
    transition: transform 0.3s ease;

`

export const ButtonsWrapper = styled.div`
    width: 100%;
    height: 75%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 40px;
    grid-row-gap: 20px;
    border: 1px solid black;

`

export const CalcButton = styled.button`
    border: 1px solid gray;
    border-radius: 15px;
    font-size: 1.5rem;
    font-weight: 500; 
    background-color: white;
    cursor: pointer;
`