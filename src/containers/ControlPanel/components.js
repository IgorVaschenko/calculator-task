import styled from 'styled-components'
import darkTheme from '@/themes/darkTheme'
import lightTheme from '@/themes/lightTheme'

export const ControlPanelWrap = styled.div`

`
export const OpenClose = styled.div`
    width: 50px;
    height: 50px;
    border: 1px solid black;
    background: ${props => props.theme.colors.backgroundColor};
    cursor: pointer;
`
export const Basket = styled.div`
    cursor: pointer;
    width: 50px;
    height: 50px;
    border: 1px solid black;
`
export const HiddenPart = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
`