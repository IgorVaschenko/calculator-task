import { DARK_THEME, LIGHT_THEME } from '@/constants';
import React from 'react'
import { SelectThemeContainer, Selector } from './components'

const SelectTheme = ({ onChange }) => {
    const selectChange = (e) => onChange(e.target.value)

    return (
        <SelectThemeContainer>
            Switch Theme
            <Selector onChange={selectChange} defaultValue={LIGHT_THEME}>
                <option value={LIGHT_THEME}>Light theme</option>
                <option value={DARK_THEME}>Dark theme</option>
            </Selector>
        </SelectThemeContainer>
    );
}

export default SelectTheme;