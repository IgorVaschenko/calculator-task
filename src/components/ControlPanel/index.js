import React from 'react';
import { useDispatch } from 'react-redux';
import { ControlPanelWrapper, ClearButton } from './components';
import SelectTheme from './SelectTheme';
import { CLEAR_HISTORY } from '@/constants';
import theme from '@/theme';

const ControlPanel = () => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch({ type: CLEAR_HISTORY })
    }
    const handleChange = () => {
        dispatch({ type: event.target.value })

    }

    return (
        <ControlPanelWrapper
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
        </ControlPanelWrapper>
    );
}

export default ControlPanel;