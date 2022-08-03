import React from 'react';
import { btns } from './btnConfig';
import { CalculatorWrapper, ButtonsWrapper, CalcButton } from './components';




const Calculator = () => {
    return (
        <CalculatorWrapper>
            <div>result</div>
            <ButtonsWrapper>
                {btns.map(btn => (
                    <CalcButton key={btn.display}>
                        {btn.display}
                    </CalcButton>
                ))}
            </ButtonsWrapper>
        </CalculatorWrapper>
    );
}

export default Calculator;