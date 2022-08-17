import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux'

import { ControlPanelWrap, OpenClose, Basket, HiddenPart } from '@/containers/ControlPanel/components'
import { CLEAR_HISTORY } from '@/constants'

import Arrow from '@/ImgComponents/Arrow'
import BasketIcon from '@/ImgComponents/Basket'


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
        <ControlPanelWrap>
            <OpenClose onClick={handleClick} $animated={animated}>
                <Arrow />
            </OpenClose>
            {panelActive &&
                <HiddenPart>
                    {children}
                    <Basket onClick={handleClear}>
                        <BasketIcon />
                    </Basket>
                </HiddenPart>
            }
        </ControlPanelWrap>
    )
}

export default ControlPanel

ControlPanel.propTypes = {
    children: PropTypes.any.isRequired
};