import { useDispatch, useSelector } from 'react-redux'
import { up, down } from './counterSlice'

function Counter() {
   const dispatch = useDispatch()
   const count = useSelector((state) => state.counter.value)
   // state.counter.value에 counter는 store에 지정한 reducer 키 값 (Slice는 reducer를 여러개 지정할 수 있다.)

   return (
      <div>
         <h2>Count: {count}</h2>
         <button
            onClick={() => {
               // dispatch({type:'up', payload:1})
               // 액션 생성자 함수(payload값)
               dispatch(up(1))
            }}
         >
            증가
         </button>
         <button
            onClick={() => {
               dispatch(down(1))
            }}
         >
            감소
         </button>
      </div>
   )
}

export default Counter
