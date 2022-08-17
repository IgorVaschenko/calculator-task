import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { SettingsWrapper, ClearButton } from '@/containers/Settings/components'
import SelectTheme from '@/containers/Settings/SelectTheme'
import { CLEAR_HISTORY } from '@/constants'


const Settings = () => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch({ type: CLEAR_HISTORY })
    }

    const handleChange = () => {
        dispatch({ type: event.target.value })
    }
    return (
        <SettingsWrapper>
            Settings
            <SelectTheme onChange={handleChange} />
            <ClearButton onClick={handleClick}>
                Clear All History
            </ClearButton>
        </SettingsWrapper>
    )
}

export default Settings