import React from 'react'
import { useSelector } from 'react-redux'

import { expressionVal, expressionValWithParentheses } from '@/utils/expressionBuilder/expressionValue'

import { DisplayExpression } from '@/containers/InputExpression/components'

const InputExpression = () => {

    const expression = useSelector(state => state.operations.fieldValue)
    const resultExpression = useSelector(state => state.operations.history)
    const pressedEquals = useSelector(state => state.operations.pressedEquals)
    const pushedDelete = useSelector(state => state.operations.pushedDelete)


    return (<DisplayExpression>
        {pushedDelete
            ? ''
            : pressedEquals
                ? resultExpression[resultExpression.length - 1]
                : (expression.includes('(') || expression.includes(')'))
                    ? expressionValWithParentheses(expression)
                    : expressionVal(expression)
        }
            </DisplayExpression>)
}

export default InputExpression