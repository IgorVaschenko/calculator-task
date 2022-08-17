import styled from 'styled-components'
import darkTheme from '@/themes/darkTheme'
import lightTheme from '@/themes/lightTheme'

export const DisplayWrapper = styled.form`
    width: ${props => props.theme.width[11]}px;
    border-bottom: 1px solid ${props => props.theme.colors.border};
    margin: ${props => props.theme.spaces[0]}px ${props => props.theme.spaces[5]}px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    `

export const InputValue = styled.input`
    width: ${props => props.theme.width[5]}px;
    padding: ${props => props.theme.spaces[0]}px ${props => props.theme.spaces[5]}px;
    color: ${props => props.theme.colors.textColorButton};
    font-size: ${props => props.theme.fontSize[4]}rem;
    background: ${props => props.theme.colors.backgroundColor};
    text-align: right;
    border: none; 
    &:focus{
        border: none;
        outline: none;
        caret-color: transparent;
    }
`
