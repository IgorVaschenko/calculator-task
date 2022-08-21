import React from 'react'

import Display from '@/containers/Display'
import HistoryCl from '@/components/History/HistoryClass'
import CalculatorPanel from '@/containers/CalculatorPanel'

import { CalculatorWrapper, CalcAndHistory } from '@/components/Calculator/components'

class CalculatorCl extends React.Component {
    render() {
        return (
            <CalcAndHistory>
                <CalculatorWrapper>
                    <Display />
                    <CalculatorPanel />
                </CalculatorWrapper>
                <HistoryCl />
            </CalcAndHistory>
        )
    }
}

export default CalculatorCl




