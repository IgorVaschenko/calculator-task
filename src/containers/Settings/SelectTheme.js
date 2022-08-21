import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import { DARK_THEME, LIGHT_THEME } from '@/constants'

import { SelectThemeContainer, Selector } from '@/containers/Settings/components'

const SelectTheme = ({ onChange }) => {

    const theme = useSelector(state => state.themes.theme)
    const selectChange = () => onChange(event.target.value)

    return (
        <SelectThemeContainer>
            Switch Theme
            <Selector onChange={selectChange} defaultValue={theme}>
                <option value={LIGHT_THEME}>Light theme</option>
                <option value={DARK_THEME}>Dark theme</option>
            </Selector>
        </SelectThemeContainer>
    )
}

export default SelectTheme

SelectTheme.propTypes = {
    onChange: PropTypes.func,
}