import React from 'react';
import styled from 'styled-components';

export const Display = styled.form`
    width: 100%;
    padding: 1vw 3vw;
    border-bottom: 1px solid black;
    font-size: 3vw;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`

export const InputExpression = styled.input`
    width: 100%;
    text-align: right;
    padding: 1vw 3vw;
    border: none;
    font-size: 3vw;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    &:focus{
        border: none;
        outline: none;
        caret-color: transparent;
    }
`