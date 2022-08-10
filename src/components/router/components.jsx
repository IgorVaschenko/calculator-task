import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Uls = styled.ul`
    list-style-type: none;
`
export const Lis = styled.li`
    display: inline-block;
    color: ${props => props.color};
    margin: 0 2vh;
    &:hover(Link) {
        textDecoration: underline;
    }
`
export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.color};
        &: hover {
            text-decoration: underline;
        }
`
