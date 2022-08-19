import styled from 'styled-components'

import { show } from '@/themes/keyframes/keyframes'

export const HomeWrapperPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: ${show} 1s linear 1 alternate;
`
