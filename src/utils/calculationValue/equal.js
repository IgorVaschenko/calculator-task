import { numbersToString } from "./numbersToString";
import { parenthesizedExpression } from "./parenthesizedExpression";
import { multiplicationDivision } from "./multiplicationDivision";
import { additionSubtraction } from "./additionSubtraction";
import { remainderOfDivision } from "./remainderOfDivision";

const equal = (calculatorValue) => {

    try {



        const simleOperations = (partOfExpression) => {
            const operands = partOfExpression.match(/\d+(\.\d+)?/g);
            console.log('operands>>>>>', operands);
            const operators = partOfExpression.match(/[\+\-\/\*\^\%]/g);
            console.log('operators>>>>>>>>>', operators);

            switch (operators[0]) {
                case '+':
                    console.log('+>>>>>>>>');
                    return operands[0] * 1 + operands[1] * 1;
                    break;
                case '-':
                    return operands[0] - operands[1];
                    break;
                case '*':
                    return operands[0] * operands[1];
                    break;
                case '/':
                    return operands[0] / operands[1];
                    break;
                case '%':
                    return operands[0] % operands[1];
                    break;
                default:
                    return 'error'
            }
        }


        if (calculatorValue.includes('(') && calculatorValue.includes(')')) {
            console.log('with parentheses>>>>');
            return 'parentheses'
        }

        if (!calculatorValue.includes('(') && !calculatorValue.includes(')')) {
            if (calculatorValue.match(/\d+(\.\d+)?/g).length === 2) {
                return simleOperations(calculatorValue)
            } else if (calculatorValue.match(/\d+(\.\d+)?/g).length > 2) {
                console.log('hard expression>>>>');
                // умножение
                const multiplicationExpressionsByTwoNumbers = calculatorValue.match(/\d+(\.\d+)?\*\d+(\.\d+)?/g)
                const multiplicationResults = multiplicationExpressionsByTwoNumbers
                    .map(exprission => exprission.split('*').reduce((result, item) => result *= item))
                multiplicationExpressionsByTwoNumbers.forEach((exprission, index) =>
                    calculatorValue = calculatorValue.slice(0, calculatorValue.indexOf(exprission)) + multiplicationResults[index] + calculatorValue.slice(calculatorValue.indexOf(exprission) + exprission.length, calculatorValue.length)
                )
                console.log('calculatorValue*>>>', calculatorValue)


                // //деление     
                const divisionExpressionsByTwoNumbers = calculatorValue.match(/\d+(\.\d+)?\/\d+(\.\d+)?/g)
                const divisionResults = divisionExpressionsByTwoNumbers
                    .map(exprission => exprission.split('/').reduce((result, item) => result /= item))
                divisionExpressionsByTwoNumbers.forEach((exprission, index) =>
                    calculatorValue = calculatorValue.slice(0, calculatorValue.indexOf(exprission)) + divisionResults[index] + calculatorValue.slice(calculatorValue.indexOf(exprission) + exprission.length, calculatorValue.length)
                )
                console.log('calculatorValue/>>>', calculatorValue)
                // const divisionExpressionsByTwoNumbers = calculatorValue.match(/\d+(\.\d+)?\/\d+(\.\d+)?/g)
                // console.log('divisionOperands>>>>>', divisionExpressionsByTwoNumbers);
                // const divisionResults = divisionExpressionsByTwoNumbers.map(exprission => exprission.split('/').reduce((result, item) => result /= item))

                // console.log('divisionResults>>>>>', divisionResults);
                // divisionExpressionsByTwoNumbers.forEach((exprission, index) =>
                //     calculatorValue = calculatorValue.slice(0, calculatorValue.indexOf(exprission)) + multiplicationResults[index] + calculatorValue.slice(calculatorValue.indexOf(exprission) + exprission.length, calculatorValue.length)
                // )
                // console.log('calculatorValue/>>>', calculatorValue)

                // //остаток                                            
                // const remainderExpressionsByTwoNumbers = calculatorValue.match(/\d+(\.\d+)?\%\d+(\.\d+)?/g)
                // console.log('remainderOperands>>>>>', remainderExpressionsByTwoNumbers);
                // const remainderResults = remainderExpressionsByTwoNumbers
                //     .map(exprission => exprission.split('%').reduce((result, item) => result % +item))
                // console.log('remainderResults>>>>>', remainderResults);

                // //сложение                                            
                // const additionExpressionsByTwoNumbers = calculatorValue.match(/\d+(\.\d+)?\+\d+(\.\d+)?/g)
                // console.log('additionOperands>>>>>', additionExpressionsByTwoNumbers);
                // const additionResults = additionExpressionsByTwoNumbers
                //     .map(exprission => exprission.split('+').reduce((result, item) => result += +item, 0))
                // console.log('additionResults>>>>>', additionResults);

                // //вычитание                                            
                // const subtractionExpressionsByTwoNumbers = calculatorValue.match(/\d+(\.\d+)?\-\d+(\.\d+)?/g)
                // console.log('subtractionOperands>>>>>', subtractionExpressionsByTwoNumbers);
                // const subtractionResults = subtractionExpressionsByTwoNumbers
                //     .map(exprission => exprission.split('-').reduce((result, item) => result - +item))
                // console.log('subtractionResults>>>>>', subtractionResults);




















                // const multiplicationResults = 0
                // const operators = calculatorValue.match(/[\*]/g);
                // console.log('operators>>>>>>>>>', operators);


                // const operands = calculatorValue.match(/\d+(\.\d+)?/g);
                // console.log('operands>>>>>', operands);
                // const operators = calculatorValue.match(/[\+\-\/\*\^\%]/g);
                // console.log('operators>>>>>>>>>', operators);
                // (/[0-9]+\*+[0-9]+(?:\*)/g);

                return 'hard'

            }
        }









        throw new Error()
    } catch {
        return 'error'
    }







    const operands = calculatorValue.match(/\d+(\.\d+)?/g);
    // console.log(operands);
    const operators = calculatorValue.match(/[\+\-\/\*\^\%]/g);
    // console.log(operators);
    //скобки первые
    const reg = calculatorValue.match(/^[\(]+[\d\+\-\*\/\(\)\%]+[\)]+$/g);
    console.log('reg>>>', reg);
    //скобки необязательные
    const reg1 = calculatorValue.match(/^[\d\(]+[\d\+\-\*\/\(\)\%]+[\d\)]+$/g);
    console.log('reg1>>>', reg1);
    //скобки необязательные
    const reg2 = calculatorValue.match(/^[^()]*(?:\([^()]*\)[^()]*)*$/g);
    console.log('reg2>>>', reg2);
    //скобки внутри
    const reg3 = calculatorValue.match(/\(([^()]+)\)/g);
    console.log('reg3>>>', reg3);


    // const arrayWithNumbersAndOperations = numbersToString(calculatorArray)
    // ^\s*([-+]?)(\d+)(?:\s*([-+*\/])\s*((?:\s[-+])?\d+)\s*)+$
    // parenthesizedExpression(arrayWithNumbersAndOperations)
    // multiplicationDivision(arrayWithNumbersAndOperations)
    // remainderOfDivision(arrayWithNumbersAndOperations)
    // additionSubtraction(arrayWithNumbersAndOperations)

    // if (arrayWithNumbersAndOperations.includes('Division by zero is not allowed')) throw new Error('Division by zero is not allowed')
    // if (arrayWithNumbersAndOperations.includes('incorrect parentheses')) throw new Error('incorrect parentheses')


    // try {
    //     const arrayWithNumbersAndOperations = numbersToString(calculatorArray)
    //     parenthesizedExpression(arrayWithNumbersAndOperations)
    //     multiplicationDivision(arrayWithNumbersAndOperations)
    //     remainderOfDivision(arrayWithNumbersAndOperations)
    //     additionSubtraction(arrayWithNumbersAndOperations)

    //     if (arrayWithNumbersAndOperations.includes('Division by zero is not allowed')) throw new Error('Division by zero is not allowed')
    //     if (arrayWithNumbersAndOperations.includes('incorrect parentheses')) throw new Error('incorrect parentheses')

    //     return arrayWithNumbersAndOperations
    // } catch (error) {
    //     return [error.message]
    // }
}

const preventCrash = () => {
    return ['Error']
    console.log('Error>>>>>');
}
export default equal;