import { useDispatch, useSelector } from 'react-redux'
import { up, down } from './counterSlice'

function Counter() {
   const dispatch = useDispatch()
   const count = useSelector((state) => {
      return state.Counter.value
   })

   return (
      <div>
         <button
            onClick={() => {
               dispatch(up(2))
            }}
         >
            +
         </button>
         <button
            onClick={() => {
               dispatch(down(2))
            }}
         >
            -
         </button>
         <span> {count}</span>
      </div>
   )
}

export default Counter
