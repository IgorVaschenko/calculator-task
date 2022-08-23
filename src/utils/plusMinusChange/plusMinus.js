import lastIndexOperation from "@/utils/expressionBuilder/lastIndexOperation"

const plusMinus = value => {
    const lastIndex = lastIndexOperation(value)
    return (
        lastIndex === -1
            ? value[0] === '-'
                ? value.slice(1)
                : '-' + value
            : value[lastIndex] === '-'
                ? value.slice(0, lastIndex) + '+' + value.slice(lastIndex + 1, value.length)
                : value.slice(0, lastIndex) + '-' + value.slice(lastIndex + 1, value.length)
    )
}

export default plusMinus