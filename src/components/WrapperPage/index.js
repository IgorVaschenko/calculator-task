import { HomeWrapperPage } from "./components"
import React from 'react';


export default ({ children }) => {
    return (
        <HomeWrapperPage>
            {children}
        </HomeWrapperPage>
    )
}