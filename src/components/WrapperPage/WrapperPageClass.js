import React from 'react'
import PropTypes from 'prop-types';
import { HomeWrapperPage } from "@/components/WrapperPage/components"

class WrapperPageCl extends React.Component {
    render() {
        return (
            <HomeWrapperPage >
                {this.props.children}
            </HomeWrapperPage>
        )
    }
}

export default WrapperPageCl

WrapperPageCl.propTypes = {
    children: PropTypes.any.isRequired
};