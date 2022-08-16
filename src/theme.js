import React from 'react'
import { useSelector } from 'react-redux'
import { css } from 'styled-components'
import { LIGHT_THEME } from './constants'

const font = 'sans-serif'

// const flagVal = () => {
//   const themeFromRedux = useSelector(state => state.themes.theme)
//   return themeFromRedux === LIGHT_THEME ? true : false
// }
// const flag = flagVal()

// export const lightTheme = {
//   colors: {
//     black: '#000000',
//     white: '#ffffff',
//     error: '#c86464',
//     primary: '#c06c84',
//     secondary: '#6c5b7b',
//     secondaryLight: '#6a6b7b',
//     backgroundColor: '#3D3F41',
//     buttonsColor: '#F2F2F2',
//     buttonsColorHover: '#B5B5B5',
//   },
// }

// export const darkTheme = {
//   colors: {
//     black: '#000000',
//     white: '#ffffff',
//     error: '#c86464',
//     primary: '#c06c84',
//     secondary: '#6c5b7b',
//     secondaryLight: '#6a6b7b',
//     backgroundColor: '#FF00AE',
//     buttonsColor: '#F2F2F2',
//     buttonsColorHover: '#FF00AE',
//   },
// }

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
  // flag,
  above,
  below,
  boxShadows,
  font,
  spaces: [0, 4, 8, 16, 32, 64, 128],
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 56, 72, 80],
  colors: {
    black: '#000000',
    white: '#ffffff',
    error: '#c86464',
    primary: '#c06c84',
    secondary: '#6c5b7b',
    secondaryLight: '#6a6b7b',
    backgroundColor: '#3D3F41',
    buttonsColor: '#F2F2F2',
    buttonsColorHover: '#B5B5B5',
  },
}


// export const lightTheme = {
//   colors: {
//     black: '#000000',
//     white: '#ffffff',
//     error: '#c86464',
//     primary: '#c06c84',
//     secondary: '#6c5b7b',
//     secondaryLight: '#6a6b7b',
//     backgroundColor: '#3D3F41',
//     buttonsColor: '#F2F2F2',
//     buttonsColorHover: '#B5B5B5',
//   },
// }

export const darkTheme = {
  above,
  below,
  boxShadows,
  font,
  spaces: [0, 4, 8, 16, 32, 64, 128],
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 56, 72, 80],
  colors: {
    black: '#000000',
    white: '#ffffff',
    error: '#c86464',
    primary: '#c06c84',
    secondary: '#6c5b7b',
    secondaryLight: '#6a6b7b',
    backgroundColor: '#FF00AE',
    buttonsColor: '#F2F2F2',
    buttonsColorHover: '#FF00AE',
  },
}