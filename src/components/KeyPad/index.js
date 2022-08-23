import { btns } from '@/constants/btnConfig'

export const KeyPad = (event, dispatch) => {
    return (
        btns.map(btn => {
            btn.key === event.key && dispatch(btn)
        })
    )
}
