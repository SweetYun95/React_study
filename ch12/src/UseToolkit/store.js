import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterSlice'
import userSlice from './userSlice'

const store = configureStore({
   reducer: {
        Counter: counterSlice, // counter 리듀서
       user: userSlice, // user 리듀서
   },
})

export default store
