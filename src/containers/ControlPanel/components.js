import styled, { css } from 'styled-components'

import { spin, spinBack } from '@/themes/keyframes/keyframes'

export const ControlPanelWrap = styled.div`
    display: flex;
`

export const OpenClose = styled.div`
    height:${props => props.theme.height[2]}px;
    width:${props => props.theme.height[2]}px;
    font-size: ${props => props.theme.fontSize[6]}rem;
    margin: ${props => props.theme.spaces[4]}px ${props => props.theme.spaces[0]}px;
    border-radius: ${props => props.theme.spaces[3]}px;
    background-image: url(src/assets/arrow.svg);
    cursor: pointer;
    background-size: cover;

    ${({ $animated }) =>
    $animated
      ? css`
            animation: ${spin} 0.4s linear;
            transform:scaleX(-1);
        `
      : css`
            animation: ${spinBack} 0.4s linear;
        `}

    &: hover{   
      background-color: ${props => props.theme.colors.arrowsColor};
      border: 1px solid ${props => props.theme.colors.calcBorder};
    }
`

export const HiddenPart = styled.div`
  width:${props => props.theme.width[3]}px;
  display: flex;
  flex-direction: column;
  transition: width 0.3s;
  transition: transform width 0.3s ease -in -out;

  ${({ open }) =>
    open
      ? css`
            transform: scaleX(${props => props.theme.width[0]}px);
        `
      : css`
            width: 0;
            transform: scaleX(0);
        `
  }

`


