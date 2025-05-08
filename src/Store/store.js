import { configureStore } from '@reduxjs/toolkit'
import { trelloReducer } from '../slices/trelloSlice'


export const store = configureStore({
    reducer: {
        trelloReducer
    }
})