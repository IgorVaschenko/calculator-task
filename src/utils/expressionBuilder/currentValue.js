import run from "@/utils/Calculator/Calculator";
import lastIndexOperation from "@/utils/expressionBuilder/lastIndexOperation";

import { regExFractNum, regExTwoPoints, regExPointEnd } from '@/constants/regEx'

const currentValue = (value) => {
    return (value.match(regExTwoPoints)
        ? 'Error'
        : value.match(regExPointEnd) && lastIndexOperation(value) + 1 === value.lastIndexOf('.')
            ? '.'
            : !value && value !== 0
                ? ''
                : !value.includes('(') || !value.includes('(')
                    ? parseFloat(value) === value
                        ? value
                        : value.match(regExFractNum)[0] || run(value.slice(0, -1))
                    : value.length - 1 === lastIndexOperation(value)
                        ? value.slice(0, lastIndexOperation(value)).match(regExFractNum)[0]
                        : value.match(regExFractNum)[0]
    );
}

export default currentValue;