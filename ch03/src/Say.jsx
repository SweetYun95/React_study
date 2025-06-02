import { useState } from 'react'

const Say = () => {
   // state: 컴포너트 내부에서 바뀔수 있는 값
   // 1. state를 사용하기 위해 useState 선언
   // const [state 값을 저장할 변수, state값을 바꿀 함수] = useState(초기값)
   const [message, setMessage] = userState('초기값')
   const onClickEnter = () => {
      setMessage(`안녕하세요.`)
   }
   const onClickLeave = () => {
      setMessage(`안녕히가세요.`)
   }

   const [color, setColor] = useState('red')
   return (
      <div>
         <button onClick={onClickEnter}>입장</button>
         <button onClick={onClickLeave}>퇴장</button>
         <h1 style={{ color }}>{{ message }}</h1>
      </div>
   )
}

export default Say
