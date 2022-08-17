import React from 'react'

import { Loader } from '@/components/Loader/components'

import darkTheme from '@/themes/darkTheme'
import lightTheme from '@/themes/lightTheme'

const LOADER_SIZE = 300

export default () => {
  return (
    <Loader
      type="Bars"
      color='black'
      height={LOADER_SIZE}
      width={LOADER_SIZE}
    />
  )
}
