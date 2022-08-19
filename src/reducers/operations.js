import {
    BTN_ADD,
    BTN_BACKSP,
    BTN_CALC,
    BTN_DELETE,
    BTN_SIGN_CHANGE,
    CLEAR_HISTORY,
    BTN_DELETE_EXP_VAL
} from "@/constants"

import run from "@/utils/Calculator/Calculator"
import plusMinus from "@/utils/plusMinusChange/plusMinus"
import { chechkingAddValue, chechkingBtnCalc } from "@/utils/checksForReducers/checks"


const initialState = {
    fieldValue: '',
    history: [],
    pressedEquals: false,
    pushedDelete: false,
}

const operations = (state = initialState, { type, payload }) => {
    switch (type) {
        case BTN_ADD:
            return chechkingAddValue(state, payload) || {
                ...state,
                fieldValue: state.fieldValue + payload,
                pressedEquals: false,
                pushedDelete: false,
            }
        case BTN_BACKSP:
            return {
                ...state,
                fieldValue: state.fieldValue.slice(0, state.fieldValue.length - 1),
            }
        case BTN_DELETE:
            return {
                ...state,
                fieldValue: '',
            }
        case BTN_DELETE_EXP_VAL:
            return {
                ...state,
                fieldValue: '',
                pushedDelete: true,
            }
        case BTN_SIGN_CHANGE:
            return {
                ...state,
                fieldValue: plusMinus(state.fieldValue),
            }
        case BTN_CALC:
            return chechkingBtnCalc(state) || {
                ...state,
                fieldValue: run(state.fieldValue),
                history: [...state.history, `${state.fieldValue} = ${run(state.fieldValue)}`],
                pressedEquals: true,
            }
        case CLEAR_HISTORY:
            return {
                ...state,
                history: [],
            }
        default:
            return state
    }
}

export default operations