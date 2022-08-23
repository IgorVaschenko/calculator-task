import styled from 'styled-components'

export const PageLayout = styled.div`
  width: ${props => props.theme.width[1]}%; 
  height: ${props => props.theme.height[3]}%;
  background: ${props => props.theme.colors.backgroundColor};
  padding: ${props => props.theme.spaces[0]}px;
  margin:  ${props => props.theme.spaces[0]}px auto;
`
