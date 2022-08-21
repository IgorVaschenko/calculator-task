import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { ControlPanelWrap, OpenClose, HiddenPart } from '@/containers/ControlPanel/components'

const ControlPanel = ({ children }) => {

    const [panelActive, setPanelActive] = useState(true)

    const handleClick = () => {
        setPanelActive(!panelActive)
    }

    return (
        <ControlPanelWrap >
            <OpenClose onClick={handleClick} $animated={panelActive} />
            <HiddenPart open={panelActive}>
                {children}
            </HiddenPart>
        </ControlPanelWrap>
    )
}

export default ControlPanel

ControlPanel.propTypes = {
    children: PropTypes.node.isRequired,
}