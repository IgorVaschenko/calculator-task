import React from 'react'
import { CalculatorWrapper, CalcAndHistory } from '@/components/Calculator/components'
import Display from '@/components/Display/index'

import HistoryCl from '@/components/History/HistoryClass'
import CalculatorPanel from '@/containers/CalculatorPanel'

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




