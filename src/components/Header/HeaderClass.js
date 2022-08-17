import React from 'react'
import { Header, CalculatorApp } from '@/components/Header/components'
import LinksCl from '@/components/Links/LinksClass'

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