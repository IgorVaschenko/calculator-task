import React, { useEffect, useState } from 'react'

const useKeyPress = (keyTarget) => {
    const [isKeyPressed, setIsKeyPressed] = useState(false)

    const downHandler = ({ key }) => {
        key === keyTarget && setIsKeyPressed(true)
    }
    const upHandler = ({ key }) => {
        key === keyTarget && setIsKeyPressed(true)
    }

    useEffect(() => {
        window.addEventListener('keydown', downHandler)
        // window.addEventListener('keyup', upHandler)
        return () => {
            window.removeEventListener('keydown', downHandler)
            // window.removeEventListener('keyup', upHandler)
        }
    }, [])

    return isKeyPressed
}

export default useKeyPress;