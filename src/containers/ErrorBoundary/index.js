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
        const { children } = this.props;
        if (error) {
            return (
                <PageLayout>
                    <Error>{error}</Error>
                </PageLayout>
            )
        } else {
            return <React.Fragment>{children}</React.Fragment>
        }
    }
}

export default ErrorBoundary

ErrorBoundary.propTypes = {
    children: PropTypes.PropTypes.node.isRequired,
}