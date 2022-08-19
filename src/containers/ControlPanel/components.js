import styled, { css } from 'styled-components'

import { spin, spinBack } from '@/themes/keyframes/keyframes'

export const ControlPanelWrap = styled.div`
`

export const OpenClose = styled.div`

    height:${props => props.theme.height[2]}px;
    width:${props => props.theme.height[2]}px;
    font-size: ${props => props.theme.fontSize[6]}rem;
    margin: ${props => props.theme.spaces[4]}px ${props => props.theme.spaces[4]}px;
    border-radius: ${props => props.theme.spaces[3]}px;
    background-image: url(src/assets/arrow.svg);
    cursor: pointer;
    background-size: cover;

    ${({ $animated }) =>
    $animated
      ? css`
            animation: ${spin} 0.6s linear;
            transform:scaleX(-1);
        `
      : css`
            animation: ${spinBack} 0.6s linear;
        `}

    &: hover{   
      background-color: ${props => props.theme.colors.buttonsColor};
      border: 1px solid ${props => props.theme.colors.calcBorder};
    }
`
export const Basket = styled.div`
    width: ${props => props.theme.width[0]}px;
    height:${props => props.theme.height[2]}px;
    font-size: ${props => props.theme.fontSize[7]}rem;
    margin: ${props => props.theme.spaces[1]}px ${props => props.theme.spaces[6]}px;
    border-radius: ${props => props.theme.spaces[3]}px;
    background-image: url(src/assets/basket.svg);
    background-size: contain;
    cursor: pointer;

    &: hover{   
      background-color: ${props => props.theme.colors.buttonsColor};
      border: 1px solid ${props => props.theme.colors.calcBorder};
    }
`

export const HiddenPart = styled.div`

  ${({ open }) =>
    open
      ? css`
            transform: translateX(0);
        `
      : css`
            transform: translateX(200%);
        `}

  transition: transform 0.3s ease-in-out;
`