export const chechkingAddValue = (state, payload) => {
    if (payload === '0' && state.fieldValue[0] === 0 && state.fieldValue[1] !== '.') return state
    if (payload === '.' && state.fieldValue.includes('.')) return state
}
export const chechkingBtnCalc = (state) => {
    if (state.fieldValue.length === 1 && !state.fieldValue[0]) return state
} 