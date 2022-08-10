import React, { useEffect, useRef } from 'react';
import { Display, InputExpression } from './components';

export default ({ result, hadleChange }) => {
    const focusInput = useRef(null)
    useEffect(() => {
        focusInput.current.focus()
    })
    return (
        <Display>
            <InputExpression
                ref={focusInput}
                type='text'
                value={result}
                placeholder='0'
                onChange={(event) => hadleChange(event.target.value[event.target.value.length - 1])}
            />
        </Display>
    )
}