import React from 'react'
import PropTypes from 'prop-types'

import { PageLayout } from '@/layouts'
import { Error } from '@/containers/ErrorBoundary/components'


class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { error: "" }
    }

    componentDidCatch(error) {
        this.setState({ error: `${error.name}: ${error.message}` })
    }

    render() {
        const { error } = this.state
        if (error) {
            return (
                <PageLayout>
                    <Error>{error}</Error>
                </PageLayout>
            )
        } else {
            return <React.Fragment>{this.props.children}</React.Fragment>
        }
    }
}

export default ErrorBoundary

ErrorBoundary.propTypes = {
    children: PropTypes.PropTypes.any.isRequired,
}