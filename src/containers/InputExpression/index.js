import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { DisplayExpression } from './components';

const InputExpression = () => {

    const expression = useSelector(state => state.operations.fieldValue)
    const expressionVal =
        expression.includes('+')
            || expression.includes('-')
            || expression.includes('*')
            || expression.includes('/')
            || expression.includes('%')
            ? expression
            : ''
    const resultExpression = useSelector(state => state.operations.history)
    const pressedEquals = useSelector(state => state.operations.pressedEquals)

    return (<DisplayExpression>
        {pressedEquals
            ? resultExpression[resultExpression.length - 1]
            : expressionVal}
    </DisplayExpression>)
}

export default InputExpression;