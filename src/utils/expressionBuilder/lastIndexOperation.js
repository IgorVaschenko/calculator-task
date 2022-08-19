const lastIndexOperation = (value) => {

    const last = (val) => value.lastIndexOf(val)

    return Math.max(last('+'), last('-'), last('/'), last('*'), last('%'), last('('), last(')'),) || 0
}

export default lastIndexOperation;