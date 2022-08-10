import { combineReducers } from 'redux'
import operations from './operations'
import themes from './themes'

export const rootReducer = combineReducers({
  operations,
  themes
})
