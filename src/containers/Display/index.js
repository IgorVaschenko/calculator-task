import React from 'react'
import { useSelector } from 'react-redux'

import InputExpression from '@/containers/InputExpression'
import currentValue from '@/utils/expressionBuilder/currentValue'

import { DisplayWrapper, InputValue } from '@/containers/Display/components'

export default () => {

    const value = useSelector(state => state.operations.fieldValue)

    return (
        <DisplayWrapper>
            <InputExpression />
            <InputValue>
                {currentValue(value) || '0'}
            </InputValue>
        </DisplayWrapper>
    )
}
