import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const Ul = styled.ul`
    list-style-type: none;
`
export const LiItem = styled.li`
    display: inline-block;
    color: ${props => props.theme.colors.textColorHeader};
    margin: 0 ${props => props.theme.spaces[3]}px;
    &:hover(Link) {
        textDecoration: underline;
    }
`
export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.colors.textColorHeader};
        &: hover {
            text-decoration: underline;
        }
`
