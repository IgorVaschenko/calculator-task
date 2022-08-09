import React from 'react';
import { Header } from './components';
import Links from '../router';

export default () => {
    return (
        <Header>
            <div>Calculator App</div>
            <Links />
        </Header>
    )
}

