import { configureStore, combineReducers } from '@reduxjs/toolkit'
import workReducer from './workSlice'
import personalReducer from './personalSlice'

const rootReducer = combineReducers({
    personal: personalReducer,
    work: workReducer
})

export const store = configureStore({
    reducer: rootReducer
})
