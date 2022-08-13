import {
    BTN_ADD,
    BTN_BACKSP,
    BTN_CALC,
    BTN_DELETE,
    BTN_SIGN_CHANGE,
    CLEAR_HISTORY
} from "@/constants";
import { chechkingAddValue, chechkingBtnCalc } from "@/utils/checksForReducers/checks";
import equal from "@/utils/calculationValue/equal";


const initialState = {
    fieldValue: '',
    history: []
}

const operations = (state = initialState, { type, payload }) => {
    switch (type) {
        case BTN_ADD:
            return chechkingAddValue(state, payload) || {
                ...state,
                fieldValue: state.fieldValue + payload
            }
        case BTN_BACKSP:
            return {
                ///!!!
                ...state,
                fieldValue: state.fieldValue.slice(0, state.fieldValue.length - 1)
            }
        case BTN_DELETE:
            return {
                ...state,
                fieldValue: ''
            }
        case BTN_SIGN_CHANGE:
            return {
                ...state,
                fieldValue: state.fieldValue[0] === '-' ? state.fieldValue.slice(1) : '-' + state.fieldValue
            }
        case BTN_CALC:
            return chechkingBtnCalc(state) || {
                ...state,
                fieldValue: equal(state.fieldValue),
                history: [...state.history, state.fieldValue],
            }
        case CLEAR_HISTORY:
            return {
                ...state,
                history: []
            }
        default:
            return state
    }
}

export default operations;