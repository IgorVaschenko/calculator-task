import React from 'react'

import ControlPanel from '@/containers/ControlPanel'
import HistoryListener from '@/containers/HistoryListener'

import { History } from '@/components/History/components'
import TrashCan from '@/containers/TrashCan'

export default () => {
    return (
        <ControlPanel>
            <History>
                History
                <HistoryListener />
            </History>
            <TrashCan />
        </ControlPanel>
    )
}