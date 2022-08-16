import InputExpression from '@/containers/InputExpression'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { handleAction } from 'redux-actions'
import { Display, InputValue } from './components'

export default () => {
    const value = useSelector(state => state.operations.fieldValue)

    return (
        <Display>
            <InputExpression />
            <InputValue
                type="text"
                value={value.match(/-{0,1}\d+\.{0,1}\d*$/) || ''}
                placeholder=""
                onChange={event => event}
            />
        </Display>
    )
}