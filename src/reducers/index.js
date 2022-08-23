import { combineReducers } from 'redux'

import operations from '@/reducers/operations'
import themes from '@/reducers/themes'

export const rootReducer = combineReducers({
  operations,
  themes,
})
