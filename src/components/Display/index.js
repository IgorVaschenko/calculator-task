import React from 'react'
import { useSelector } from 'react-redux'

import InputExpression from '@/containers/InputExpression'
import currentValue from '@/utils/expressionBuilder/currentValue'

import { DisplayWrapper, InputValue } from '@/components/Display/components'

export default () => {

    const value = useSelector(state => state.operations.fieldValue)

    return (
        <DisplayWrapper>
            <InputExpression />
            <InputValue
                type="text"
                value={currentValue(value)}
                placeholder="0"
                onChange={event => event}
            />
        </DisplayWrapper>
    )
}
