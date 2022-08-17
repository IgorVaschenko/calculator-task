import React from 'react'
import ControlPanel from '@/containers/ControlPanel'
import { History } from '@/components/History/components'
import HistoryListener from '@/containers/HistoryListener'

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