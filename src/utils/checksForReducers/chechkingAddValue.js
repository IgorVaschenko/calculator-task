export const chechkingAddValue = (state, payload) => {
    if (state.fieldValue[0] === '0' && state.fieldValue.length === 1 && payload === '0') return state

    if (payload === '.' && parseFloat(state.fieldValue.split('').reverse().join('')).toString().includes('.')) return state

    if ((payload === '+'
        || payload === '*'
        || payload === '/'
        || payload === '%'
        || payload === '')
        && state.fieldValue === '') return state

    if ((payload === '+'
        || payload === '*'
        || payload === '/'
        || payload === '%'
        || payload === '')
        && (state.fieldValue[state.fieldValue.length - 1] === '+'
            || state.fieldValue[state.fieldValue.length - 1] === '-'
            || state.fieldValue[state.fieldValue.length - 1] === '*'
            || state.fieldValue[state.fieldValue.length - 1] === '/'
            || state.fieldValue[state.fieldValue.length - 1] === '%'
        )) return state

}
export const chechkingBtnCalc = (state) => {

    if (state.fieldValue.length === 0 && !state.fieldValue[0]) return state

    if (state.history[state.history.length - 1] === state.fieldValue) return state
} 