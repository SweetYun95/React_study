import { createSlice } from '@reduxjs/toolkit'

// reducer대신에 slice 생성
const counterSlice = createSlice({
   // name, initialState, reducers 를 정의
   name: 'counterSlice', // slice의 이름
   initialState: { value: 0 }, // 초기 state
   reducers: {
      // reducer의 역할, state 변경하는 함수 지정
      // 💥 toolkit은 자동으로 불변성을 유지해줘서, state 직접 수정이 가능 💥
      up: (state, action) => {
         // state = { value: 0 }
         // state.value = 0
         state.value += action.payload
      },
      down: (state, action) => {
         state.value -= action.payload
      },
   },
})

// 리듀서 함수를 내보냄 -> store에 연결
export default counterSlice.reducer

// 액션(action) 생성자 함수를 내보냄 -> Counter에 연결
export const { up, down } = counterSlice.actions
