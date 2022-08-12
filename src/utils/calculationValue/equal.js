import { join } from "redux-saga/effects";
import {
    parentheses,
    subtraction,
    addition,
    remainder,
    division,
    multiplication
} from "./simpleOperations";
import { negativeNumbers } from "./negativeNumbers";

const equal = (calculatorValue) => {
    try {



        return parentheses(addition(remainder(division(multiplication(negativeNumbers(calculatorValue))))))
        // return parentheses(subtraction(addition(remainder(division(multiplication(negativeNumbers(calculatorValue)))))))
        if (isNaN(calculatorValue)) throw new Error()
        return calculatorValue
    } catch {
        return 'Error'
    }
}

export default equal;
