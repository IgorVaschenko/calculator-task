export const chechkingAddValue = (state, payload) => {

    const stateValue = state.fieldValue
    const stateLength = state.fieldValue.length

    const math = ['+', '-', '*', '/', '%']
    const mathAndEmphy = ['+', '-', '*', '/', '%', '']



    if (stateValue[0] === '0' && stateLength === 1 && payload === '0') return state

    if (payload === '.' &&
        parseFloat(stateValue.split('').reverse().join('')).toString().includes('.') &&
        typeof (stateValue[stateLength - 1]) === 'number'
    ) return state

    if (payload === '.' &&
        parseInt(stateValue.split('').reverse().join('')).toString().includes('.')
    ) return state

    if (payload === '.' && stateValue[stateLength - 1] === '.') return state

    if (payload && stateValue === 'Error') return { ...state, fieldValue: payload }

    if (payload === '0' && stateValue[stateLength - 1] === '0' && (math.includes(stateValue[stateLength - 2]))) return state

    if (mathAndEmphy.includes(payload) && state.fieldValue === '') return state

    if (mathAndEmphy.includes(payload) && math.includes(stateValue[stateLength - 1])) return state

}
export const chechkingBtnCalc = state => {

    const stateValue = state.fieldValue
    const stateLength = state.fieldValue.length

    const stateValueHist = state.history
    const stateLengthHist = state.history.length

    if (stateLength === 0 && !stateValue[0]) return state

    if (stateValueHist[stateLengthHist - 1] === stateValue) return state

    if (stateLength === 1 && stateValue[0] === '.') return state
} 