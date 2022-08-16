import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { btns } from '@/constants'
import { CalculatorWrapper, ButtonsWrapper, CalcButton, EqualButton, CalcAndHistory } from './components'
import Display from '../../components/Display'
import History from '../../components/History'
import theme from '@/theme'
import { KeyPad } from '../../components/KeyPad'

const Calculator = props => {
    const dispatch = useDispatch()
    const fieldValue = useSelector(state => state.operations.fieldValue)

    const themeVal = useSelector(state => state.themes.theme)

    const handleClick = btn => {
        dispatch(btn)
    }

    const hadleKeyUp = event =>
        useEffect(() =>
            addEventListener('keyup', event => KeyPad(event, dispatch))
            , [])


    return (
        <CalcAndHistory
            onKeyUp={hadleKeyUp(event)}

            background={theme.colors.white}
        >
            <CalculatorWrapper
                background={theme.colors.white}
            >
                <Display />
                <ButtonsWrapper>
                    {btns.map((btn, index) => (
                        index < btns.length - 1
                            ? <CalcButton
                                key={btn.payload}
                                onClick={() => handleClick(btn)}
                                buttonsColor={theme.colors.buttonsColor}
                                buttonsColorHover={theme.colors.buttonsColorHover}
                            >
                                {btn.payload}
                            </CalcButton>
                            : <EqualButton
                                key={btn.payload}
                                onClick={() => handleClick(btn)}
                                buttonsColor={theme.colors.buttonsColor}
                                buttonsColorHover={theme.colors.buttonsColorHover}
                            >
                                {btn.payload}
                            </EqualButton>
                    ))}
                </ButtonsWrapper>
            </CalculatorWrapper>
            <History />
        </CalcAndHistory>
    )
}

export default Calculator