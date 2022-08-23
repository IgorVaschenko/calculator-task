import {
    regExWithZero,
    regExMul,
    regExDiv,
    regExRem,
    regExAddSub,
    regExAddSubPosNeg,
    regExPar,
} from "@/constants"


export const numbersWithoutZero = value => {

    if (!value.match(regExWithZero)) return value
    if (value[value.length - 1] === '.') return value

    const numbersWithoutZero = value.match(regExWithZero)
    numbersWithoutZero.map((exprission, index) =>
        value =
        value.slice(0, value.indexOf(exprission)) +
        exprission.replace('.', '0.') +
        value.slice(
            value.indexOf(exprission) +
            exprission.length, value.length,
        ),
    )
    return value
}

export const multiplication = value => {

    if (!value.includes('*')) return value

    const multiplicationExpressionsByTwoNumbers = value.match(regExMul)
    const multiplicationResults = multiplicationExpressionsByTwoNumbers
        .map(exprission => exprission.split('*').reduce((result, item) => result *= item))

    multiplicationExpressionsByTwoNumbers.forEach((exprission, index) =>
        value =
        value.slice(0, value.indexOf(exprission)) +
        multiplicationResults[index] +
        value.slice(
            value.indexOf(exprission) +
            exprission.length, value.length,
        ),
    )
    return value
}

export const division = value => {

    if (!value.includes('/')) return value

    const divisionExpressionsByTwoNumbers = value.match(regExDiv)
    const divisionResults = divisionExpressionsByTwoNumbers
        .map(exprission => exprission.split('/').reduce((result, item) => result /= item))

    divisionExpressionsByTwoNumbers.forEach((exprission, index) =>
        value =
        value.slice(0, value.indexOf(exprission)) +
        divisionResults[index] +
        value.slice(
            value.indexOf(exprission) +
            exprission.length, value.length,
        ),
    )
    return value
}

export const remainder = value => {

    if (!value.includes('%')) return value

    const remainderExpressionsByTwoNumbers = value.match(regExRem)
    const remainderResults = remainderExpressionsByTwoNumbers
        .map(exprission => exprission.split('%').reduce((result, item) => !(result % +item) ? '0' : result % +item))

    remainderExpressionsByTwoNumbers.forEach((exprission, index) =>
        value =
        value.slice(0, value.indexOf(exprission)) +
        remainderResults[index] +
        value.slice(
            value.indexOf(exprission) +
            exprission.length, value.length,
        ),
    )
    return value
}

export const additionSubtraction = value => {

    if (!value.includes('+') && !value.includes('-')) return value

    value = value.replace('--', '+')
    value = value.replace('+-', '-')
    value = value.replace('-+', '-')

    const additionSubtractionNumbers = value.match(regExAddSub)
    const allValues = additionSubtractionNumbers[0].match(regExAddSubPosNeg).filter(value => value)

    return allValues.reduce((result, value) => +result + +value)
}

export const parentheses = value => {

    if (!value.includes('(') && !value.includes(')')) return value

    const parenthesesExpressions = value.match(regExPar)
    const parenthesesResults = parenthesesExpressions
        .map(exprission => exprission.slice(1, exprission.length - 1))
        .map(exprission => additionSubtraction(remainder(division(multiplication(numbersWithoutZero(exprission))))))

    parenthesesExpressions.forEach((exprission, index) =>
        value =
        value.slice(0, value.indexOf(exprission)) +
        parenthesesResults[index] +
        value.slice(
            value.indexOf(exprission) +
            exprission.length, value.length,
        ),
    )

    if (value.includes('(') && value.includes(')')) {
        return parentheses(value)
    } else {
        return value
    }
}

