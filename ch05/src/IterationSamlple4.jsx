import React, { useState } from 'react'

function IterationSamlple4() {
   const [names, setNames] = useState([
      { id: 1, text: '눈사람' },
      { id: 2, text: '얼음' },
      { id: 3, text: '눈' },
      { id: 4, text: '바람' },
   ])
   // console.log('[렌더링] 현재 names:', names)

   const [inputText, setInputText] = useState('')
   const [nextId, setNextId] = useState(5)

   const onChange = (e) => {
      // console.log('[입력중] inputText:', e.target.value)
      setInputText(e.target.value)
   }

   const onClick = () => {
      // console.log('[버튼 클릭] 추가할 text:', inputText)

      const nextNames = names.concat({
         id: nextId, //5
         text: inputText, // input 창에 사용자가 입력한 값
      })

      // console.log('[업데이트] 추가된 배열:', nextNames)
      setNames(nextNames) // name, state를 합친 nextNames 리스트fh 업데이트
      setNextId(nextId + 1) // 다음 id 값 준비,추가때마다 key가 될 id값 1씩 증가
      setInputText('') // input 창(inputText) 초기화
   }

   const nameList = names.map((name) => <li key={name.id}>{name.text}</li>)

   return (
      <div>
         <input type="text" value={inputText} onChange={onChange} />
         <button onClick={onClick}>추가</button>
         <ul>{nameList}</ul>
      </div>
   )
}

export default IterationSamlple4
