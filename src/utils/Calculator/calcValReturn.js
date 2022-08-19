export const calcValReturn = (currentValue) => {
    return currentValue === '' ? '.'
        : parseFloat(currentValue) === parseInt(currentValue) && currentValue !== ''
            ? currentValue.toString()
            : (+currentValue).toFixed(3).toString()
}

export const calcValReplace = (value) => {
    return value.replace('+', '+0').replace('*', '*0').replace('/', '/0').replace('%', '%0')
}

