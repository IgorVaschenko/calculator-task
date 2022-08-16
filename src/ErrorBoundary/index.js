import { PageLayout } from '@/layouts';
import React from 'react'
import { Error } from './components';


class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: "" };
    }

    componentDidCatch(error) {
        this.setState({ error: `${error.name}: ${error.message}` });
    }

    render() {
        const { error } = this.state;
        if (error) {
            return (
                <PageLayout>
                    <Error>{error}</Error>
                </PageLayout>
            );
        } else {
            return <>{this.props.children}</>;
        }
    }
}

export default ErrorBoundary