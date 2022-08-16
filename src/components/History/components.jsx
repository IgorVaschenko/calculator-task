import React from 'react'
import styled from 'styled-components'

export const History = styled.div`
    width: 25vw;
    height: 600px;
    border-left: 1px solid black;
    font-size: 3rem;
    font-weight: 500;
    margin: 2vh;
    padding-left: 6vh;
    overflow: auto;
`

export const HistoryList = styled.ul`
    font-size: 2vh;
    list-style-type: none;
    margin: 3vh;
`

export const HistoryUnit = styled.li`
    font-size: 1.5rem;
    padding: 5px 0;
    color: gray;
`