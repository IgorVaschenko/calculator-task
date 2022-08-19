import run from "@/utils/Calculator/Calculator"
import lastIndexOperation from "./lastIndexOperation"

const include = (value, exp) => exp.includes(value)

export const expressionVal = expression =>
    include('+', expression) ||
        include('-', expression) ||
        include('*', expression) ||
        include('/', expression) ||
        include('%', expression)
        ? run(expression.slice(0, lastIndexOperation(expression))) + expression[lastIndexOperation(expression)]
        : ''

export const expressionValWithParentheses = expression => include('(', expression) || include('+', expression) ||
    include('-', expression) ||
    include('*', expression) ||
    include('/', expression) ||
    include('%', expression)
    ? expression : ''
