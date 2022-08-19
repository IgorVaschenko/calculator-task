export const regExWithZero = /(^\.\d+)|(\+|\-|\*|\/|\%)\.\d+/g
export const regExMul = /\d+(\.\d+)?\*\d+(\.\d+)?(\*\d+(\.\d+)?)*/g
export const regExDiv = /\d+(\.\d+)?\/\d+(\.\d+)?(\/\d+(\.\d+)?)*/g
export const regExRem = /\d+(\.\d+)?\%\d+(\.\d+)?(\%\d+(\.\d+)?)*/g
export const regExAddSub = /\-?\d*(\.\d+)?(\+|\-)\d+(\.\d+)?((\+|\-)\d*(\.\d+)?)*/g
export const regExAddSubPosNeg = /\-?\+?\d*(\.\d+)?/g
export const regExPar = /\(([^()]+)\)/g

export const regExFractNum = /\-?\d*\.{0,1}\d*$/g
export const regExTwoPoints = /\.\d+\./g
export const regExPointEnd = /\.$/g
