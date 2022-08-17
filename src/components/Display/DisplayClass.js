import React from 'react'
import InputExpression from '@/containers/InputExpression'
import { Display, InputValue } from '@/components/Display/components'

class DisplayCl extends React.Component {
    render() {
        return (
            <Display>
                <InputExpression />
                <InputValue
                    type="text"
                    value={value.match(/-{0,1}\d+\.{0,1}\d*$/) || ''}
                    placeholder=""
                    onChange={event => event}
                />
            </Display>
        )
    }
}

export default DisplayCl