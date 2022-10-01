import { combineReducers, legacy_createStore } from 'redux'
import { counterReducer } from '../Reducers/CounterReducer'
import { maxNumberReducer } from '../Reducers/MaxNumberReducer'
import { startNumberReducer } from '../Reducers/StartNumberReducer'

const rootReducer = combineReducers({
  maxNumber: maxNumberReducer,
  startNumber: startNumberReducer,
  counter: counterReducer,
})

let preloadedState
const pesistedCounter = localStorage.getItem('maxNumber2')
if (pesistedCounter)
  preloadedState = {
    maxNumber: JSON.parse(pesistedCounter),
    startNumber: Number(localStorage.getItem('startNumber2')),
    counter: Number(localStorage.getItem('startNumber2')),
  }

export type AppRootStateType = ReturnType<typeof rootReducer>
export const store = legacy_createStore(rootReducer, preloadedState)

//@ts-ignore
// window.store = store
