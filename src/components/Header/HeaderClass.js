import React from 'react'
import { Header, CalculatorApp } from './components'
import Links from '../Links'
import LinksCl from '../Links/LinksClass'


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