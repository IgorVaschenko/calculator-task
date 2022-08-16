import styled from 'styled-components'
import theme from '@/theme'
import darkTheme from '@/themes/darkTheme'
import lightTheme from '@/themes/lightTheme'

export const Error = styled.div`
    ${'' /* height: 100%;
    width: 100%; */}
    font-size: 3rem;
    font-weight: 500;
    padding: 3vh;
    color: ${props => props.theme.colors.errorTextColor};
    background-color: ${props => props.theme.colors.errorBackgroundColor};
`