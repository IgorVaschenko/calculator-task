import React from 'react'
import InputExpression from '@/containers/InputExpression'
import { useSelector } from 'react-redux'
import { DisplayWrapper, InputValue } from '@/components/Display/components'

export default () => {
    const value = useSelector(state => state.operations.fieldValue)

    return (
        <DisplayWrapper>
            <InputExpression />
            <InputValue
                type="text"
                value={value.match(/-{0,1}\d+\.{0,1}\d*$/) || ''}
                placeholder=""
                onChange={event => event}
            />
        </DisplayWrapper>
    )
}