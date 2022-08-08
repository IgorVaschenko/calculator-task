import {
    BTN_ADD,
    BTN_BACKSP,
    BTN_CALC,
    BTN_DELETE,
    BTN_SIGN_CHANGE
} from "@/constants";
import { chechkingAddValue, chechkingBtnCalc } from "@/utils/checksForReducers/chechkingAddValue";
import equal from "@/utils/calculationValue/equal";


const initialState = {
    fieldValue: [0],
    history: []
}

const operations = (state = initialState, { type, payload }) => {
    console.log({ type, payload });
    switch (type) {
        case BTN_ADD:
            return chechkingAddValue(state, payload) || {
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
            return chechkingBtnCalc(state) || {
                ...state,
                history: [...state.history, [...state.fieldValue].join('')],
                fieldValue: equal(state.fieldValue),
            }
        default:
            return state
    }
}

export default operations;