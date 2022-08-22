import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import { btns } from '@/constants'
import { KeyPad } from '@/components/KeyPad'

import { KeyPress } from '@/containers/KeyPressListener/components'

const KeyPressListener = ({ children }) => {

    const dispatch = useDispatch()
    const ref = useRef()

    const handleKeyDown = (event) => {
        btns.map(btn => {
            btn.key === event.key && KeyPad(event, dispatch)
        })
    }

    useEffect(() => {
        ref.current.focus();
    }, []);

    return (
        <KeyPress
            ref={ref}
            tabIndex={-1}
            onKeyDown={handleKeyDown}
        >
            {children}
        </KeyPress>
    );
}

export default KeyPressListener;

KeyPressListener.propTypes = {
    children: PropTypes.node.isRequired,
}
