import React from 'react';
import { Header } from './components';
import Links from '../router';
import theme from '@/theme';

export default (props) => {
    return (
        <Header
            color={theme.colors.white}
            background={theme.colors.backgroundColor}
        >
            <div>Calculator App</div>
            <Links />
        </Header>
    )
}

