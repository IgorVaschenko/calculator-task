import React from 'react';
import { useSelector } from 'react-redux';
import { History, HistoryList } from './components';

export default () => {
    const history = useSelector(state => state.operations.history)
    console.log('history>>>>>', history);
    return (
        <History>
            <HistoryList>
                {history.map((hist, i) => (
                    <li key={i}>
                        {hist}
                    </li>
                ))}
            </HistoryList>
        </History>
    )
}