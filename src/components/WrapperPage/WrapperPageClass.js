import React from 'react'
import { HomeWrapperPage } from "./components"

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