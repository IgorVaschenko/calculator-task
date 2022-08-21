import React from 'react'
import { useDispatch } from 'react-redux'

import { CLEAR_HISTORY } from '@/constants'
import { Trash } from '@/containers/TrashCan/components'

const TrashCan = () => {

    const dispatch = useDispatch()

    const handleClear = () => {
        dispatch({ type: CLEAR_HISTORY })
    }

    return (
        <Trash onClick={handleClear} />
    )
}

export default TrashCan