import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '@/theme';

export const Header = styled.div`
    height: 10vh;
    font-size: 3vh;
    font-weight: 500;
    padding: 3vh;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    color: ${props => props.color};
    background-color: ${props => props.background};
`
export const Uls = styled.ul`
    list-style-type: none;
`
export const Lis = styled.li`
    display: inline-block;
    color: ${props => props.color};
    margin: 0 2vh;
`

export const LinkUp = styled(Link)`
    textDecoration: none;
    color: ${props => props.color};

    & : hover {
        textDecoration: underline;
    }
`
