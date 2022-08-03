import React from 'react';
import styled from 'styled-components';

export const CalculatorWrapper = styled.div`
    height: 400px;
    width: 75%;
    background-color: white;
    display: flex;
    justify-content: flex-end;
`
export const CalcResult = styled.div``

export const ButtonsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    grid-auto-rows: minmax(60px, 80px);
    justify-content: center;
    align-content: end;

`

export const CalcButton = styled.div`
    border: 1px solid gray;
    border-radius: 15px;
    font-size: 2rem;
    font-weight: 500; 
`