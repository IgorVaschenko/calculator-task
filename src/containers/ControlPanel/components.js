import styled, { css, keyframes } from 'styled-components'
import darkTheme from '@/themes/darkTheme'
import lightTheme from '@/themes/lightTheme'

export const spin = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(180deg);
    }
`
export const spinBack = keyframes`
    0% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(0deg);
    }
`

export const ControlPanelWrap = styled.div``

export const OpenClose = styled.div`
    height:${props => props.theme.height[2]}px;
    width:${props => props.theme.height[2]}px;
    font-size: ${props => props.theme.fontSize[6]}rem;
    margin: ${props => props.theme.spaces[1]}px ${props => props.theme.spaces[4]}px;
    background: none;
    cursor: pointer;

    ${({ $animated }) =>
        $animated
            ? css`
            animation: ${spin} 0.4s linear;

        `
            : css`
            animation: ${spinBack} 0.4s linear;
        `}
`
export const Basket = styled.div`
    width: ${props => props.theme.width[0]}px;
    height:${props => props.theme.height[2]}px;
    font-size: ${props => props.theme.fontSize[7]}rem;
    margin: ${props => props.theme.spaces[1]}px ${props => props.theme.spaces[4]}px;
    cursor: pointer;
`
export const HiddenPart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`

