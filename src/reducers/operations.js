import {
    addToExpression,
    calcExpression,
    backspFromExpression,
    deleteExpression
} from "@/actions";

import {
    BTN_ADD,
    BTN_BACKSP,
    BTN_CALC,
    BTN_DELETE
} from "@/constants";


const initialState = {
    fieldValue: [0],
    history: []
}

const operations = (state = initialState, { type, payload }) => {
    console.log({ type, payload });
    switch (type) {
        case BTN_ADD:
            if (payload === '0' && state.fieldValue.length === 1) return state
            if (payload === '.' && state.fieldValue.includes('.')) return state
            return {
                ...state,
                fieldValue: [...state.fieldValue.filter((item, index) => !(item === 0 && index === 0)), ...payload]
            }
        case BTN_BACKSP:
            return {
                ...state,
                fieldValue: state.fieldValue.length > 1 ? [...state.fieldValue].slice(0, state.fieldValue.length - 1) : [0]
            }
        case BTN_DELETE:
            return {
                ...state,
                fieldValue: [0]
            }
        case BTN_CALC:

            return {
                ...state,
                fieldValue: [...state.fieldValue],
                history: [...state.history, [...state.fieldValue].join('')]
            }
        default:
            return state
    }
}

export default operations;