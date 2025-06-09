import { useCallback, useState } from 'react'
import './css/TodoInsert.css'
import { IoMdAddCircleOutline } from 'react-icons/io'

function TodoInsert({ onInsert }) {
   const [value, setValue] = useState('')
   const onChange = () => setValue(e.target.value)

   const onSubmit = useCallback(
      (e) => {
         // submit 이벤트로 인한 새로고침 발생을 방지
         e.preventDefault()

         onInsert() // 할일 등룩, App컴포넌트에서 props로 받아온 onInsert()함수
         setValue('') // value state 초기화
      },
      [onInsert, value]
      // onInsert 자체도 useCallback으로 정의된 함수이며 todos state에 의존함
      // todos 가 변경될때 마다 onInsert함수가 새로 만들어지므로 사용
   )
   return (
      // onSubmit: Submit 버튼을 눌렀을 때 발생하는 이벤트
      <form className="TodoInsert" onSubmit={onSubmit}>
         <input placeholder="할 일을 입력하세요" value={value} onChange={onChange} />
         <button type="submit">
            <IoMdAddCircleOutline />
         </button>
      </form>
   )
}

export default TodoInsert
