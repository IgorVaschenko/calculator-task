const equal = (calculatorArray) => {

    // all the calculator used function
    let openParenthesisSign = 0
    let openParenthesisCounter = 0
    let closedParenthesisCounter = 0
    let counter = 0
    // function used to unite into number all the string 
    const arrayWithNumbersAndOperations = numbersToString(calculatorArray, counter)
    console.log(arrayWithNumbersAndOperations);
    console.log({ counter });

    //simple >>>> just 2 values
    if (!calculatorArray.includes('(') && !calculatorArray.includes(')')) {
        return simpleOperations(calculatorArray)
    }


    if (!amountOpenClosedParenthesis(arrayWithNumbersAndOperations)) return preventCrash()

    solveMultiplicationAndDivisionInParenthesis(arrayWithNumbersAndOperations)



}

// function used to unite into number all the string 
const numbersToString = (array) => {
    let number = ''
    const arrayWithNumbersAndOperations = []
    array.map((item, i, arr) => {
        if (item === '.' || !isNaN(parseInt(item))) number += item
        if (isNaN(parseInt(item)) && item !== '.') {
            arrayWithNumbersAndOperations.push(+number)
            arrayWithNumbersAndOperations.push(item)
            number = 0
        }
        if (i === arr.length - 1) {
            arrayWithNumbersAndOperations.push(+number)
        }
    })
    return arrayWithNumbersAndOperations.filter(item => item)
}

// function used to prevent the browser from crashing when the user insert something wrong 
const preventCrash = () => {
    return ['Error']
    console.log('Error>>>>>');
}

// subset function of open and closed parentheses
function amountOpenClosedParenthesis(array) {
    let openParenthesisCounter = 0
    let closedParenthesisCounter = 0
    array.map((item, index) => {
        item === '(' && openParenthesisCounter++
        item === ')' && closedParenthesisCounter++
        return item
    })
    return openParenthesisCounter === closedParenthesisCounter
}


// function used to solve first all the multiplicatio in parenthesis
function solveMultiplicationAndDivisionInParenthesis(array) {
    const openParenthesisIndex = []
    const closedParenthesisIndex = []
    array.map((item, index) => {
        item === '(' && openParenthesisIndex.push(index)
        item === ')' && closedParenthesisIndex.push(index)
        return item
    })




    console.log('openParenthesisIndex>>>>', openParenthesisIndex);
    console.log('closedParenthesisIndex>>>>', closedParenthesisIndex);
}







const simpleOperations = (arrValues) => {
    const operations = ['+', '-', '*', '/']

    return operations
        .map(item => {
            if (arrValues.includes(item) && item === '*') {
                return arrValues
                    .join('')
                    .split(item)
                    .reduce((res, elem) => (+res * +elem).toFixed(3))
            }
            if (arrValues.includes(item) && item === '/') {
                return arrValues
                    .join('')
                    .split(item)
                    .reduce((res, elem) => (+res / +elem).toFixed(3))
            }
            if (arrValues.includes(item) && item === '+') {
                return arrValues
                    .join('')
                    .split(item)
                    .reduce((res, elem) => (+res + +elem).toFixed(3))
            }
            if (arrValues.includes(item) && item === '-') {
                return arrValues
                    .join('')
                    .split(item)
                    .reduce((res, elem) => (+res - +elem).toFixed(3))
            }
        })
        .filter(item => item)
}


















export default equal;