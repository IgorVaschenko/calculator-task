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
    BTN_DELETE,
    BTN_SIGN_CHANGE
} from "@/constants";
import equal from "@/utils/equal";


const initialState = {
    fieldValue: [0],
    history: []
}

const operations = (state = initialState, { type, payload }) => {
    console.log({ type, payload });
    switch (type) {
        case BTN_ADD:
            if (payload === '0' && state.fieldValue[0] === 0 && state.fieldValue[1] !== '.') return state
            // if (payload === '.' && state.fieldValue.includes('.')) return state
            return {
                ...state,
                fieldValue: [...state.fieldValue.filter((item, index) => !(item === 0 && index === 0)), ...payload]
            }
        case BTN_BACKSP:
            return {
                ...state,
                fieldValue: state.fieldValue.length > 1 ?
                    [...state.fieldValue].slice(0, state.fieldValue.length - 1) :
                    [0]
            }
        case BTN_DELETE:
            return {
                ...state,
                fieldValue: [0]
            }
        case BTN_SIGN_CHANGE:
            return {
                ...state,
                fieldValue: state.fieldValue[0] === '-' ?
                    [...state.fieldValue.filter((item, index) => item !== '-')] :
                    ['-', ...state.fieldValue]
            }
        case BTN_CALC:
            return {
                ...state,
                history: [...state.history, [...state.fieldValue].join('')],
                fieldValue: [equal(state.fieldValue)],
            }
        default:
            return state
    }
}

export default operations;