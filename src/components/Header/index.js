import React from 'react'
import { Header, CalculatorApp } from '@/components/Header/components'
import Links from '@/components/Links'

export default () => {
    return (
        <Header>
            <CalculatorApp>Calculator App</CalculatorApp>
            <Links />
        </Header>
    )
}