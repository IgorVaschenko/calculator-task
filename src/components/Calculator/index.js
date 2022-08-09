import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { btns, btnEqual } from './btnConfig';
import { CalculatorWrapper, ButtonsWrapper, CalcButton, EqualButton, CalcAndHistory } from './components';
import Display from '../Display';
import History from '../History';

const Calculator = () => {
    const dispatch = useDispatch()
    const fieldValue = useSelector(state => state.operations.fieldValue)

    const handleClick = btn => {
        dispatch(btn)
    }

    return (
        <CalcAndHistory>
            <CalculatorWrapper>
                <Display result={fieldValue} />
                <ButtonsWrapper>
                    {btns.map(btn => (
                        <CalcButton key={btn.payload} onClick={() => handleClick(btn)}>
                            {btn.payload}
                        </CalcButton>
                    ))}
                    <EqualButton onClick={() => handleClick(btnEqual)}>
                        {btnEqual.payload}
                    </EqualButton>
                </ButtonsWrapper>
            </CalculatorWrapper>
            <History />
        </CalcAndHistory>
    );
}

export default Calculator;