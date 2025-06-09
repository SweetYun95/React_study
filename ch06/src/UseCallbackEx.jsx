import { useState, useMemo, useCallback } from 'react'

// 평균 구하는 함수
const getAverage = (number) => {
   console.log(`평균값 계산...`)

   if (number.length === 0) return 0

   const sum = number.reduce((a, b) => a + b) // 누적합계
   return sum / number.length
}

function UseCallbackEx() {
   const [list, setList] = useState([])
   const [number, setNumber] = useState('')

   // useCallback: 컴포넌트가 리렌더링이 될때 함수가 재생성 되지 않도록 해준다.
   // 함수가 재생성 되면 성능에 좋지 않음

   // 컴포넌트가 처음 렌더링 될때만 함수 생성
   const onChange = useCallback((e) => setNumber(e.target.value), [])

   // number, list의 state 값이 바뀔때만 함수 재생성
   // ❤ 함수안에서 state 값을 참조(사용)하는 경우 반드시 state값을 지정해 줘야 한다
   // ㄴ> 함수를 재생성 하지 않으면 바뀐 state값을 올바르게 가져올수 X
   const onInsert = useCallback(() => {
      const nextList = list.concat(parseInt(number)) //parseInt: 숫자형 중에서도 정수형
      setList(nextList)
      setNumber('')
   }, [number, list])

   const avg = useMemo(() => getAverage(list), [list])

   return (
      <div>
         <input type="text" value={number} onChange={onChange} />
         <button onClick={onInsert}>등록</button>
         <ul>
            {list.map((value, index) => (
               <li key={index}>{value}</li>
            ))}
         </ul>
         <div>
            <b>평균값: {avg}</b>
         </div>
      </div>
   )
}

export default UseCallbackEx
