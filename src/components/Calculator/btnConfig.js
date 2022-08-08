import {
    BTN_ADD,
    BTN_DELETE,
    BTN_CALC,
    BTN_BACKSP,
    BTN_SIGN_CHANGE
} from "@/constants";

export const btns = [
    {
        type: BTN_DELETE,
        payload: 'C',
    },
    {
        type: BTN_ADD,
        payload: '7',
    },
    {
        type: BTN_ADD,
        payload: '8',
    },
    {
        type: BTN_ADD,
        payload: '9',
    },
    {
        type: BTN_ADD,
        payload: '*',
    },
    {
        type: BTN_ADD,
        payload: '-',
    },
    {
        type: BTN_ADD,
        payload: '4',
    },
    {
        type: BTN_ADD,
        payload: '5',
    },
    {
        type: BTN_ADD,
        payload: '6',
    },
    {
        type: BTN_ADD,
        payload: '/',
    },
    {
        type: BTN_ADD,
        payload: '+',
    },
    {
        type: BTN_ADD,
        payload: '1',
    },
    {
        type: BTN_ADD,
        payload: '2',
    },
    {
        type: BTN_ADD,
        payload: '3',
    },
    {
        type: BTN_SIGN_CHANGE,
        payload: '+/-',
    },
    {
        type: BTN_ADD,
        payload: '.',
    },
    {
        type: BTN_ADD,
        payload: '(',
    },
    {
        type: BTN_ADD,
        payload: '0',
    },
    {
        type: BTN_ADD,
        payload: ')',
    },
    {
        type: BTN_BACKSP,
        payload: 'CE',
    },
    {
        type: BTN_ADD,
        payload: '%',
    },
]

export const btnEqual = {
    type: BTN_CALC,
    payload: '=',
}

///%