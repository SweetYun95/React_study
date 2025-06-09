import React, { useState } from 'react'

function EventPractice() {
   const [username, setUsername] = useState('')
   const [message, setMessage] = useState('')

   const onClick = () => {
      alert(`첫번째 입력값: ${username}, 두번째 입력값: ${message}`)

      // state값을 초기화
      setUsername('')
      setMessage('')
   }

   const onKeyDown = (e) => {
      // console.log(e)
      // 엔터를 눌렀을때 onClick() 실행
      if (e.key === 'Enter') {
         onClick()
      }
   }

   // input창에 입력한 값을 각각의 state에 적용
   const onChangeUsername = (e) => setUsername(e.target.value)
   const onChangeMessage = (e) => setMessage(e.target.value)

   return (
      <div>
         <h1>이벤트 연습</h1>

         <input type="text" name="username" placeholder="아무거나 입력" value={username} onChange={onChangeUsername} />

         <input type="text" name="message" placeholder="아무거나 입력" value={message} onChange={onChangeMessage} onKeyDown={onKeyDown} />

         {/* disabled=false 가되야 확인버튼 활성화, 두가지 다 입력하면 활성화 */}
         {/* '문자열' = true  => !부정 연산자로 두개다 입력시에만 false || false 으로 확인버튼이 활성화 된다. */}
         {/* 첫번째 input창과 두번째 input 둘다 입력이 되었을때만 버튼이 활성화 */}
         <button onClick={onClick} disabled={!username || !message}>
            확인
         </button>
      </div>
   )
}

export default EventPractice
