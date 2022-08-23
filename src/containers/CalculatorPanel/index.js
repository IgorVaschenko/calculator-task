import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { btns } from '@/constants'
import KeyPressListener from '@/containers/KeyPressListener'

import { ButtonsWrapper, CalcButton, EqualButton } from '@/components/Calculator/components'


const CalculatorPanel = () => {

    const dispatch = useDispatch()

    const handleClick = useCallback(() => {
        btns.map(btn => {
            btn.key === event.target.id && dispatch(btn)
        })
    }, [btns])

    return (
        <KeyPressListener>
            <ButtonsWrapper>
                {btns.map((btn, index) => (
                    btn.payload !== '='
                        ? <CalcButton
                            id={btn.key}
                            key={btn.payload}
                            onClick={handleClick}
                            tabIndex={0}
                        >
                            {btn.payload}
                        </CalcButton>
                        : <EqualButton
                            id={btn.key}
                            key={btn.payload}
                            onClick={handleClick}
                            tabIndex={-1}
                        >
                            {btn.payload}
                        </EqualButton>
                ))}
            </ButtonsWrapper>
        </KeyPressListener>
    )
}

export default CalculatorPanel