import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SettingsWrapper, ClearButton } from './components'
import SelectTheme from './SelectTheme'
import { CLEAR_HISTORY } from '@/constants'
import theme, { lightTheme, darkTheme } from '@/theme'


const Settings = () => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch({ type: CLEAR_HISTORY })
    }

    const handleChange = () => {
        dispatch({ type: event.target.value })
    }
    return (
        <SettingsWrapper
            background={theme.colors.white}
        >
            Settings
            <SelectTheme
                onChange={handleChange}
                background={theme.colors.white}
            />
            <ClearButton onClick={handleClick}
                background={theme.colors.white}
                buttonsColorHover={theme.colors.buttonsColorHover}
            >
                Clear All History
            </ClearButton>
        </SettingsWrapper>
    )
}

export default Settings