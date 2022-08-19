import React from 'react'

import Links from '@/components/Links'

import { Header, CalculatorApp } from '@/components/Header/components'

export default () => {
    return (
        <Header>
            <CalculatorApp>Calculator App</CalculatorApp>
            <Links />
        </Header>
    )
}