import { css } from 'styled-components'

const font = 'sans-serif'

const boxShadows = [
  'box-shadow: 0px 4px 24px -8px rgba(0,0,0,0.75)',
]

const size = {
  xs: 550,
  small: 768,
  med: 992,
  large: 1200,
}

const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

const below = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export default {
  above,
  below,
  boxShadows,
  font,
  width: [75, 100, 300, 400, 450, 500, 600, 700, 800, 900, 1000, 1100, 90],
  height: [30, 50, 75, 100, 300, 400, 500, 600, 700, 800, 1000, 90],
  fontSize: [1, 1.25, 1.5, 1.75, 2, 2.5, 3, 4],
  spaces: [0, 4, 8, 16, 20, 32, 45, 64, 128],
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 56, 72, 80],
  colors: {
    textColorHeader: '#ffffff',
    backgroundColorHeader: '#3D3F41',
    backgroundColor: '#ffffff',
    textColor: '#000000',
    buttonsColorHover: '#B5B5B5',
    buttonsColor: '#F2F2F2',
    calcBorder: '#C1C1C1',
    textColorButton: '#000000',
    errorTextColor: '#ffffff',
    errorBackgroundColor: '#FF0000',
    border: '#000000',
    history: '#808080',
    textColorHistory: '#000000',
  },
}
