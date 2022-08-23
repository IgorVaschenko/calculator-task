import React from 'react'
import PropTypes from 'prop-types'

import { HomeWrapperPage } from "@/components/WrapperPage/components"

class WrapperPageCl extends React.Component {
    render() {
        const { children } = this.props
        return (
            <HomeWrapperPage >
                {children}
            </HomeWrapperPage>
        )
    }
}

export default WrapperPageCl

WrapperPageCl.propTypes = {
    children: PropTypes.node.isRequired,
}