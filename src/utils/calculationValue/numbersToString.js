export const numbersToString = (array) => {
    let number = ''
    const arrayWithNumbersAndOperations = []
    array.map((item, i, arr) => {
        if (item === '.' || !isNaN(parseInt(item))) {
            number += item
        }
        if (item === '-' && (arr[i - 1] === undefined || arr[i - 1] === '(')) {
            arr[i + 1] = 0 - arr[i + 1];
            return
        }
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

