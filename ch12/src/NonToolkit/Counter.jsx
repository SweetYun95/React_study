import { useDispatch, useSelector } from 'react-redux'

function Counter() {
   const dispatch = useDispatch()
   // state = { value: 0 } -> count = 0
    const count = useSelector((state) => state.value)

   return (
      <div>
         <button
            onClick={() => {
               dispatch({ type: 'UP', step: 1 })
            }}
         >
            +
         </button>
         <span>{count}</span>
      </div>
   )
}

export default Counter
