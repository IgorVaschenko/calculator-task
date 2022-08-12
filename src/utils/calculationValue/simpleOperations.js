export const multiplication = (value) => {
    if (!value.includes('*')) return value
    const multiplicationExpressionsByTwoNumbers = value.match(/\d+(\.\d+)?\*\d+(\.\d+)?(\*\d+(\.\d+)?)*/g)
    const multiplicationResults = multiplicationExpressionsByTwoNumbers
        .map(exprission => exprission.split('*').reduce((result, item) => result *= item))
    multiplicationExpressionsByTwoNumbers.forEach((exprission, index) =>
        value =
        value.slice(0, value.indexOf(exprission)) +
        multiplicationResults[index] +
        value.slice(
            value.indexOf(exprission) +
            exprission.length, value.length
        )
    )
    console.log('value*', value);
    return value
}
export const division = (value) => {
    if (!value.includes('/')) return value
    const divisionExpressionsByTwoNumbers = value.match(/\d+(\.\d+)?\/\d+(\.\d+)?(\/\d+(\.\d+)?)*/g)
    const divisionResults = divisionExpressionsByTwoNumbers
        .map(exprission => exprission.split('/').reduce((result, item) => result /= item))
    divisionExpressionsByTwoNumbers.forEach((exprission, index) =>
        value =
        value.slice(0, value.indexOf(exprission)) +
        divisionResults[index] +
        value.slice(
            value.indexOf(exprission) +
            exprission.length, value.length
        )
    )
    console.log('value/', value);
    return value
}
export const remainder = (value) => {
    if (!value.includes('%')) return value
    const remainderExpressionsByTwoNumbers = value.match(/\d+(\.\d+)?\%\d+(\.\d+)?(\%\d+(\.\d+)?)*/g)
    const remainderResults = remainderExpressionsByTwoNumbers
        .map(exprission => exprission.split('%').reduce((result, item) => !(result % +item) ? '0' : result % +item))
    remainderExpressionsByTwoNumbers.forEach((exprission, index) =>
        value =
        value.slice(0, value.indexOf(exprission)) +
        remainderResults[index] +
        value.slice(
            value.indexOf(exprission) +
            exprission.length, value.length
        )
    )
    console.log('value%', value);
    return value
}
export const addition = (value) => {
    if (!value.includes('+')) return value
    const additionExpressionsByTwoNumbers = value.match(/\d*(\.\d+)?(\+|\-)\d+(\.\d+)?((\+|\-)\d*(\.\d+)?)*/g)
    const additionResults = additionExpressionsByTwoNumbers
        .map(exprission => exprission

            ////доделать  +/- в одном
            .reduce((result, item, index, array) =>
                item === '+'
                    ? result
                    : item === '-'
                        ? result += -(+array[index + 1] * 2)
                        : result += +item
                , 0))

    additionExpressionsByTwoNumbers.forEach((exprission, index) =>
        value =
        value.slice(0, value.indexOf(exprission)) +
        additionResults[index] +
        value.slice(
            value.indexOf(exprission) +
            exprission.length, value.length
        )
    )
    console.log('value+', value);
    return value
}
// export const subtraction = (value) => {
//     if (!value.includes('-')) return value
//     const subtractionExpressionsByTwoNumbers = value.match(/\d+(\.\d+)?\-\d+(\.\d+)?(\-\d+(\.\d+)?)*/g)
//     const subtractionResults = subtractionExpressionsByTwoNumbers
//         .map(exprission => exprission.split('-').reduce((result, item) => result - +item))
//     subtractionExpressionsByTwoNumbers.forEach((exprission, index) =>
//         value =
//         value.slice(0, value.indexOf(exprission)) +
//         subtractionResults[index] +
//         value.slice(
//             value.indexOf(exprission) +
//             exprission.length, value.length
//         )
//     )
//     console.log('value-', value);
//     return value
// }
export const parentheses = (value) => {
    if (!value.includes('(') && !value.includes(')')) return value
    const parenthesesExpressions = value.match(/\(([^()]+)\)/g)

    const parenthesesResults = parenthesesExpressions
        .map(exprission => exprission.slice(1, exprission.length - 1))
        .map(exprission => subtraction(addition(remainder(division(multiplication(exprission))))))
    parenthesesExpressions.forEach((exprission, index) =>
        value =
        value.slice(0, value.indexOf(exprission)) +
        parenthesesResults[index] +
        value.slice(
            value.indexOf(exprission) +
            exprission.length, value.length
        )
    )
    console.log('value()', value);
    if (value.includes('(') && value.includes(')')) {
        return parentheses(value)
    } else {
        return value
    }
}
