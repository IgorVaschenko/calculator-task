import React from 'react'
import { useSelector } from 'react-redux'

import ControlPanel from '@/containers/ControlPanel'
import HistoryListener from '@/containers/HistoryListener'

import { History } from '@/components/History/components'

export default () => {
    return (
        <ControlPanel>
            <History>
                History
                <HistoryListener />
            </History>
        </ControlPanel>
    )
}