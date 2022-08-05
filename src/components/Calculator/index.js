import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { btns, btnEqual } from './btnConfig';
import { CalculatorWrapper, ButtonsWrapper, CalcButton, EqualButton } from './components';
import Display from '../Display';




const Calculator = () => {
    const [val, setVal] = useState('0')
    const dispatch = useDispatch()
    const fieldValue = useSelector(state => state.operations.fieldValue)
    console.log('fieldValue>>>>>', fieldValue);

    const handleClick = btn => {
        console.log(btn);
        dispatch(btn)
    }

    return (
        <CalculatorWrapper>
            <Display result={fieldValue} />
            <ButtonsWrapper>
                {btns.map(btn => (
                    <CalcButton key={btn.payload} onClick={() => handleClick(btn)}>
                        {btn.payload}
                    </CalcButton>
                ))}
            </ButtonsWrapper>
            <EqualButton onClick={() => handleClick(btnEqual)}>
                {btnEqual.payload}
            </EqualButton>
        </CalculatorWrapper>
    );
}

export default Calculator;