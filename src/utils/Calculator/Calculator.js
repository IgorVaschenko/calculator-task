import {
    parentheses,
    additionSubtraction,
    remainder,
    division,
    multiplication,
    numbersWithoutZero,
} from "@/utils/Calculator/simpleOperations"

import { calcValReplace, calcValReturn } from "@/utils/Calculator/calcValReturn"


const Command = function (execute, value) {
    this.execute = execute
    this.value = value
}

const ParCommand = function (value) {
    return new Command(parentheses, value)
}

const ZeroCommand = function (value) {
    return new Command(numbersWithoutZero, value)
}

const MulCommand = function (value) {
    return new Command(multiplication, value)
}

const DivCommand = function (value) {
    return new Command(division, value)
}

const RemCommand = function (value) {
    return new Command(remainder, value)
}

const AddSubCommand = function (value) {
    return new Command(additionSubtraction, value)
}

const Calculator = function (calculatorValue) {
    let current = calcValReplace(calculatorValue)

    return {
        execute: function (command) {
            current = command.execute(current, command.value)
        },
        getCurrentValue: function () {
            return current
        },
    }
}

function run(calculatorValue) {
    try {
        const calculator = new Calculator(calculatorValue)

        calculator.execute(new ZeroCommand(calculatorValue))
        calculator.execute(new ParCommand(calculatorValue))
        calculator.execute(new MulCommand(calculatorValue))
        calculator.execute(new DivCommand(calculatorValue))
        calculator.execute(new RemCommand(calculatorValue))
        calculator.execute(new AddSubCommand(calculatorValue))

        const result = calculator.getCurrentValue()

        if (isNaN(parseFloat(result)) && result !== '' || parseFloat((result)) === Infinity) {
            throw new Error()
        }

        return calcValReturn(result)
    } catch {
        return 'Error'
    }
}

export default run

