import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { btns } from '@/constants'
import { KeyPad } from '@/components/KeyPad'

import { ButtonsWrapper, CalcButton, EqualButton } from '@/components/Calculator/components'


const CalculatorPanel = () => {

    const dispatch = useDispatch()
    const fieldValue = useSelector(state => state.operations.fieldValue)

    const handleClick = useCallback(() => {
        btns.map(btn => {
            btn.key === event.target.id && dispatch(btn)
        })
    }, [btns])

    useEffect(() => {
        addEventListener('keyup', () => KeyPad(event, dispatch))
        return removeEventListener('keyup', () => KeyPad(event, dispatch))
    }, [])

    return (
        <ButtonsWrapper>
            {btns.map((btn, index) => (
                btn.payload !== '='
                    ? <CalcButton
                        id={btn.key}
                        key={btn.payload}
                        onClick={handleClick}
                    >
                        {btn.payload}
                      </CalcButton>
                    : <EqualButton
                        id={btn.key}
                        key={btn.payload}
                        onClick={handleClick}
                    >
                        {btn.payload}
                      </EqualButton>
            ))}
        </ButtonsWrapper>
    )
}

export default CalculatorPanel