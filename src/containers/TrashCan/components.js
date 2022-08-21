import styled from 'styled-components'

export const Trash = styled.div`
    width: ${props => props.theme.width[0]}px;
    height:${props => props.theme.height[2]}px;
    font-size: ${props => props.theme.fontSize[7]}rem;
    margin: ${props => props.theme.spaces[1]}px ${props => props.theme.spaces[6]}px;
    border-radius: ${props => props.theme.spaces[3]}px;
    background-image: url(src/assets/basket.svg);
    background-size: cover;
    cursor: pointer;
    align-self: flex-end;

    &: hover{   
      background-color: ${props => props.theme.colors.buttonsColor};
      border: 1px solid ${props => props.theme.colors.calcBorder};
    }
`