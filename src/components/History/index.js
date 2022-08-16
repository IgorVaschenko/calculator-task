import ControlPanel from '@/containers/ControlPanel'
import React from 'react'
import { useSelector } from 'react-redux'
import { History, HistoryList, HistoryUnit } from './components'

export default () => {
    const history = useSelector(state => state.operations.history)
    return (
        <ControlPanel>
            <History>
                History
                <HistoryList>
                    {history.map((hist, i) => (
                        <HistoryUnit key={i}>
                            {hist}
                        </HistoryUnit>
                    ))}
                </HistoryList>
            </History>
        </ControlPanel>
    )
}