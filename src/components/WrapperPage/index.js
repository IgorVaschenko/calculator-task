import { WrapperPage } from "./components"
import React from 'react';


export default ({ children }) => {
    return (
        <WrapperPage>
            {children}
        </WrapperPage>
    )
}