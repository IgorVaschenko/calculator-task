export const additionSubtraction = array => {
    const addition = '+'
    const subtraction = '-'

    if (array.includes(addition)) {
        array.splice(
            array.lastIndexOf(addition) - 1,
            array.lastIndexOf(addition) + 2,
            parseFloat((array[array.lastIndexOf(addition) - 1] + array[array.lastIndexOf(addition) + 1]).toFixed(3))
        )
    } else if (array.includes(subtraction)) {
        array.splice(
            array.indexOf(subtraction) - 1,
            array.indexOf(subtraction) + 2,
            parseFloat((array[array.indexOf(subtraction) - 1] - array[array.indexOf(subtraction) + 1]).toFixed(3))
        )
    }

    if (array.includes(addition) || array.includes(subtraction)) {
        additionSubtraction(array)
    } else {
        return array
    }
    return array
}