import { numbersToString } from "./numbersToString";
import { parenthesizedExpression } from "./parenthesizedExpression";
import { multiplicationDivision } from "./multiplicationDivision";
import { additionSubtraction } from "./additionSubtraction";
import { remainderOfDivision } from "./remainderOfDivision";

const equal = (calculatorArray) => {
    try {
        const arrayWithNumbersAndOperations = numbersToString(calculatorArray)
        parenthesizedExpression(arrayWithNumbersAndOperations)
        multiplicationDivision(arrayWithNumbersAndOperations)
        remainderOfDivision(arrayWithNumbersAndOperations)
        additionSubtraction(arrayWithNumbersAndOperations)

        if (arrayWithNumbersAndOperations.includes('Division by zero is not allowed')) throw new Error('Division by zero is not allowed')
        if (arrayWithNumbersAndOperations.includes('incorrect parentheses')) throw new Error('incorrect parentheses')

        return arrayWithNumbersAndOperations
    } catch (error) {
        return [error.message]
    }
}

const preventCrash = () => {
    return ['Error']
    console.log('Error>>>>>');
}
export default equal;