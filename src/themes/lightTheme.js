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
  // width: ;
  height: [75, 100, 300],
  fontSize: [1, 1.25, 1.5, 1.75],
  spaces: [0, 4, 8, 16, 20, 32, 64, 128],
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 56, 72, 80],
  colors: {
    textColorHeader: '#ffffff',
    backgroundColorHeader: '#3D3F41',
    backgroundColor: '#FFFFFF',
    textColor: 'black',
    buttonsColorHover: '#B5B5B5',
    errorTextColor: '#FFFFFF',
    errorBackgroundColor: '#FF0000',
    black: '#000000',
    white: '#ffffff',
    error: '#c86464',
    primary: '#c06c84',
    secondary: '#6c5b7b',
    secondaryLight: '#6a6b7b',
    buttonsColor: '#F2F2F2',
  },
}