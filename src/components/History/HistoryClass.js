import React from 'react'

import ControlPanel from '@/containers/ControlPanel'
import HistoryListener from '@/containers/HistoryListener'

import { History } from '@/components/History/components'

class HistoryCl extends React.Component {
    render() {
        return (
            <ControlPanel>
                <History>
                    History
                    <HistoryListener />
                </History>
            </ControlPanel>
        )
    }
}

export default HistoryCl