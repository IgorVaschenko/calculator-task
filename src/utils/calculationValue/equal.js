import {
    parentheses,
    additionSubtraction,
    remainder,
    division,
    multiplication,
    numbersWithoutZero
} from "./simpleOperations";

const equal = (calculatorValue) => {
    try {
        calculatorValue = additionSubtraction(remainder(division(multiplication(numbersWithoutZero(parentheses(calculatorValue))))))
        if (isNaN(parseInt(calculatorValue))) {
            throw new Error()
        }
        return parseFloat(calculatorValue) === parseInt(calculatorValue)
            ? calculatorValue.toString()
            : (+calculatorValue).toFixed(3).toString()
    } catch {
        return 'Error'
    }
}

export default equal;
