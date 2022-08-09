import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.div`
    height: 10vh;
    font-size: 3vh;
    font-weight: 500;
    padding: 3vh;
    display: flex;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`
export const Uls = styled.ul`
    list-style-type: none;
`
export const Lis = styled.li`
    display: inline-block;
    color: white;
    margin: 0 2vh;
    &:hover(Link) {
        textDecoration: underline;
    }
`
