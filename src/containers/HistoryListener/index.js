import React from 'react'
import { useSelector } from 'react-redux'

import unique from 'uniqid'

import { HistoryList, HistoryUnit } from '@/containers/HistoryListener/components'

export default () => {
    const history = useSelector(state => state.operations.history)
    return (
        <HistoryList>
            {history.map(hist => (
                <HistoryUnit key={unique()}>
                    {hist}
                </HistoryUnit>
            ))}
        </HistoryList>
    )
}

