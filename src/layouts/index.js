import styled from 'styled-components'

export const PageLayout = styled.div`
  width: 100%;
  height: 100%;

  max-width: 1280px;

  padding: ${({ theme }) => theme.spaces[0]}px;
  margin: 0 auto;
`
