import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Application from '@/App'
import { store } from '@/store'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('root'),
)
