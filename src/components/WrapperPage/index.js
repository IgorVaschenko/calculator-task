import React from 'react'
import PropTypes from 'prop-types';

import { HomeWrapperPage } from "@/components/WrapperPage/components"


const WrapperPage = ({ children }) => {
    return (
        <HomeWrapperPage >
            {children}
        </HomeWrapperPage>
    )
}

export default WrapperPage

WrapperPage.propTypes = {
    children: PropTypes.node.isRequired
};


