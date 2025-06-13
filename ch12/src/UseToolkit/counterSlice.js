import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
   name: 'counterSlice', // slice 이름(store안에 slice가 여러개 있게되어 구분하기 위함)
   initialState: { value: 0 },
   //reducer: state를 변경
   reducers: {
      up: (state, action) => {
         state.value += action.payload
      },
      down: (state, action) => {
         state.value -= action.payload
      },
   },
})

export default counterSlice.reducer // reducer를 내보냄

export const { up, down } = counterSlice.actions // reducers 안에 정의한 up, down 함수를 내보냄
