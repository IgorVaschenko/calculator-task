import React from 'react'

import LinksCl from '@/components/Links/LinksClass'

import { Header, CalculatorApp } from '@/components/Header/components'

class HeaderCl extends React.Component {
    render() {
        return (
            <Header>
                <CalculatorApp>Calculator App</CalculatorApp>
                <LinksCl />
            </Header>
        )
    }
}

export default HeaderCl