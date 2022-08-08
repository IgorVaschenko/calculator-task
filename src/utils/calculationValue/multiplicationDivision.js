export const multiplicationDivision = array => {
    const multiplication = '*'
    const division = '/'

    if (array.includes(multiplication)) {
        array.splice(
            array.indexOf(multiplication) - 1, 3,
            parseFloat((array[array.indexOf(multiplication) - 1] * array[array.indexOf(multiplication) + 1]).toFixed(3))
        )
    } else if (array.includes(division) && array.indexOf(division) + 1) {
        array.splice(
            array.indexOf(division) - 1, 3,
            (isNaN(array[array.indexOf(division) - 1] / array[array.indexOf(division) + 1]) ?
                'Division by zero is not allowed' :
                parseFloat((array[array.indexOf(division) - 1] / array[array.indexOf(division) + 1]).toFixed(3))
            )
        )
    }

    if (array.includes(multiplication) || array.includes(division)) {
        multiplicationDivision(array)
    } else {
        return array
    }
    return array

}