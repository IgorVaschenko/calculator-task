export const remainderOfDivision = array => {
    const remainder = '%'
    if (array.includes(remainder)) {
        array.splice(
            array.indexOf(remainder) - 1, 3,
            parseFloat((array[array.indexOf(remainder) - 1] % array[array.indexOf(remainder) + 1]).toFixed(3))
        )
    }
    return array
}