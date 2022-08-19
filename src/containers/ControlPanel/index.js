import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux'

import { CLEAR_HISTORY } from '@/constants'

import { ControlPanelWrap, OpenClose, Basket, HiddenPart } from '@/containers/ControlPanel/components'

const ControlPanel = ({ children }) => {
    const [panelActive, setPanelActive] = useState(true)
    const [animated, setAnimated] = useState()

    const dispatch = useDispatch()

    const handleClear = () => {
        dispatch({ type: CLEAR_HISTORY })
    }

    const handleClick = () => {
        setPanelActive(!panelActive)
        setAnimated(panelActive)
    }

    return (
        <ControlPanelWrap open={panelActive}>
            <OpenClose onClick={handleClick} $animated={animated} />
            <HiddenPart open={panelActive}>
                {children}
                <Basket onClick={handleClear} />
            </HiddenPart>
        </ControlPanelWrap>
    )
}

export default ControlPanel

ControlPanel.propTypes = {
    children: PropTypes.node.isRequired
};