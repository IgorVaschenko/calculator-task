import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { btns } from '@/constants'
import { ButtonsWrapper, CalcButton, EqualButton } from '@/components/Calculator/components'
import { KeyPad } from '@/components/KeyPad'


const CalculatorPanel = () => {
    const dispatch = useDispatch()
    const fieldValue = useSelector(state => state.operations.fieldValue)

    const handleClick = btn => {
        dispatch(btn)
    }
    const hadleKeyUp = event =>
        useEffect(() =>
            addEventListener('keyup', event => KeyPad(event, dispatch))
            , [])

    return (
        <ButtonsWrapper onKeyUp={hadleKeyUp(event)}>
            {btns.map((btn, index) => (
                index < btns.length - 1
                    ? <CalcButton
                        key={btn.payload}
                        onClick={() => handleClick(btn)}
                    >
                        {btn.payload}
                    </CalcButton>
                    : <EqualButton
                        key={btn.payload}
                        onClick={() => handleClick(btn)}
                    >
                        {btn.payload}
                    </EqualButton>
            ))}
        </ButtonsWrapper>
    )
}

export default CalculatorPanel