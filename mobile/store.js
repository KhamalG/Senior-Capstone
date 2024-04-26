import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './slices/cartSlice'
import restaurantSlice from './slices/restaurantSlice'
import orderSlice from './slices/orderSlice'

export const store = configureStore({
    reducer: {
       cart: cartSlice,
       restaurant: restaurantSlice,
       order: orderSlice 
    }
})