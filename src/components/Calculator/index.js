import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { btns, btnEqual } from './btnConfig';
import { CalculatorWrapper, ButtonsWrapper, CalcButton, EqualButton, CalcAndHistory } from './components';
import Display from '../Display';
import History from '../History';
import theme from '@/theme';

const Calculator = (props) => {
    const dispatch = useDispatch()
    const fieldValue = useSelector(state => state.operations.fieldValue)
    const handleClick = (btn) => {
        dispatch(btn)
    }
    const hadleChange = (event) => {
        btns.map(btn => {
            btn.payload === event && dispatch(btn)
        })
    }

    return (
        <CalcAndHistory
            background={theme.colors.white}
        >
            <CalculatorWrapper
                background={theme.colors.white}
            >
                <Display result={fieldValue} hadleChange={hadleChange} />
                <ButtonsWrapper>
                    {btns.map(btn => (
                        <CalcButton
                            key={btn.payload}
                            onClick={() => handleClick(btn)}
                            buttonsColor={theme.colors.buttonsColor}
                            buttonsColorHover={theme.colors.buttonsColorHover}
                        >
                            {btn.payload}
                        </CalcButton>
                    ))}
                    <EqualButton
                        onClick={() => handleClick(btnEqual)}
                        buttonsColor={theme.colors.buttonsColor}
                        buttonsColorHover={theme.colors.buttonsColorHover}
                    >
                        {btnEqual.payload}
                    </EqualButton>
                </ButtonsWrapper>
            </CalculatorWrapper>
            <History />
        </CalcAndHistory>
    );
}

export default Calculator;