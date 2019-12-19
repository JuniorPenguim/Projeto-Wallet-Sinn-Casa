import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import mainDuck from './ducks/mainDuck'


export const Store = createStore(mainDuck, applyMiddleware(thunk))
