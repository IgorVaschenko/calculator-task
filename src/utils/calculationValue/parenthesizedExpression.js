import { multiplicationDivision } from "./multiplicationDivision"
import { additionSubtraction } from "./additionSubtraction"

export const parenthesizedExpression = array => {
    if (array.indexOf('(') !== 0 && typeof (array[array.indexOf('(') - 1]) === 'number') {
        array.push('incorrect parentheses')
    }
    if (array.includes('(') || array.includes(')')) {
        const inParenthesis = array.slice(
            array.indexOf('(') + 1,
            array.indexOf(')'),
        )
        array.splice(
            array.indexOf('('),
            array.indexOf(')') + 1,
            '#'
        )

        if (ar) {//проверка на обе скобки 
            array.push('incorrect parentheses')
        }

        multiplicationDivision(inParenthesis)
        additionSubtraction(inParenthesis)
        return array.splice(array.indexOf('#'), array.indexOf('#') + 1, ...inParenthesis)
    }
    return array
}