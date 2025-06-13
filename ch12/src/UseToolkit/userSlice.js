import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
   name: 'user',
   initialState: { name: '', age: 0 },
   reducers: {
      setName: (state, action) => {
         state.name = action.payload
      },
      setAge: (state, action) => {
         state.age = action.payload
      },
   },
})

export default userSlice.reducer // reducer를 내보냄
export const { setName, setAge } = userSlice.actions // reducers 안에 정의한 setName, setAge 함수를 내보냄
