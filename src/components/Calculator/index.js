import React from 'react'

import Display from '@/containers/Display'
import History from '@/components/History'
import CalculatorPanel from '@/containers/CalculatorPanel'

import { CalculatorWrapper, CalcAndHistory } from '@/components/Calculator/components'

const Calculator = () => {
    return (
        <CalcAndHistory>
            <CalculatorWrapper>
                <Display />
                <CalculatorPanel />
            </CalculatorWrapper>
            <History />
        </CalcAndHistory>
    )
}

export default Calculator