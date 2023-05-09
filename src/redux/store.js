import { configureStore } from '@reduxjs/toolkit'
import formReducer from './slices/Form'
import { GoodsApi } from './api/GoodsApi'

export const store = configureStore({
     reducer: {
          [GoodsApi.reducerPath]: GoodsApi.reducer,
          form: formReducer
     },
     middleware: (getDefaultMiddlewaer) => getDefaultMiddlewaer().concat(GoodsApi.middleware) 
})