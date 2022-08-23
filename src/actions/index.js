import {
    BTN_ADD,
    BTN_BACKSP,
    BTN_CALC,
    BTN_DELETE,
} from "@/constants"

export const addToExpression = payload => ({
    type: BTN_ADD,
    payload,
})

export const deleteExpression = () => ({
    type: BTN_DELETE,
})

export const backspFromExpression = () => ({
    type: BTN_BACKSP,
})

export const calcExpression = () => ({
    type: BTN_CALC,
})

