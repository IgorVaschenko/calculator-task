import React from 'react'
import { Header, CalculatorApp } from './components'
import Links from '../Links'

export default () => {
    return (
        <Header>
            <CalculatorApp>Calculator App</CalculatorApp>
            <Links />
        </Header>
    )
}