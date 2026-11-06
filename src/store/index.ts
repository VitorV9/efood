import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/cart'
import { apiEfood } from '../services/api'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [apiEfood.reducerPath]: apiEfood.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiEfood.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
