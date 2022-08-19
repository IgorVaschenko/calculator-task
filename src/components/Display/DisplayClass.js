import React from 'react'

import InputExpression from '@/containers/InputExpression'
import currentValue from '@/utils/expressionBuilder/currentValue'

import { Display, InputValue } from '@/components/Display/components'

class DisplayCl extends React.Component {
    render() {
        return (
            <Display>
                <InputExpression />
                <InputValue
                    type="text"
                    value={currentValue()}
                    placeholder="0"
                    onChange={event => event}
                />
            </Display>
        )
    }
}

export default DisplayCl