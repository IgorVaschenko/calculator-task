import React from 'react'
import { CalculatorWrapper, CalcAndHistory } from '@/components/Calculator/components'
import Display from '@/components/Display'
import History from '@/components/History'
import CalculatorPanel from '@/containers/CalculatorPanel'

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