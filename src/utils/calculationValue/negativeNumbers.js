export const negativeNumbers = (value) => {
    if (!value.match(/(^\-\d+(\.\d+)?)|(\(\-\d+(\.\d+)?\)?)/g)) return value

    const negativeNumbers = value.match(/(^\-\d+(\.\d+)?)|(\(\-\d+(\.\d+)?\)?)/g)

    const negativeNumberResults = negativeNumbers
        .map(exprission => {
            exprission = exprission
                .split('')
                .filter(item => item !== '(')
                .filter(item => item !== ')')
                .filter(item => item !== '-')
                .join('')
            return `${exprission}-${exprission * 2}`
        })

    negativeNumbers.forEach((exprission, index) => {
        if (value[value.indexOf(exprission) - 1] === '-') {
            value = value.slice(0, value.indexOf(exprission) - 1) +
                '+' + value.slice(value.indexOf(exprission), value.length)
        }
    })

    negativeNumbers.forEach((exprission, index) =>
        value = value.slice(0, value.indexOf(exprission)) +
        negativeNumberResults[index] +
        value.slice(
            value.indexOf(exprission) +
            exprission.length, value.length
        )
    )


    return value
}