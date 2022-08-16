import React, { useState } from 'react'
import { ControlPanelWrap, OpenClose, Basket, HiddenPart } from './components';
import { useDispatch } from 'react-redux'
import { CLEAR_HISTORY } from '@/constants';

const ControlPanel = ({ children }) => {
    const [panelActive, setPanelActive] = useState(true)
    const dispatch = useDispatch()

    const handleClear = () => {
        dispatch({ type: CLEAR_HISTORY })
    }

    const handleClick = () => {
        setPanelActive(!panelActive)
    }

    return (
        <ControlPanelWrap>
            <OpenClose onClick={handleClick} />
            {panelActive &&
                <HiddenPart>
                    {children}
                    <Basket onClick={handleClear} />
                </HiddenPart>
            }
        </ControlPanelWrap>
    )
}

export default ControlPanel;