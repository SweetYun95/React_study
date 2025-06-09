import { useState, useMemo } from 'react'

// 평균 구하는 함수
const getAverage = (number) => {
   console.log(`평균값 계산...`)

   if (number.length === 0) return 0

   const sum = number.reduce((a, b) => a + b) // 누적합계
   return sum / number.length
}

function UseMemoEx2() {
   const [list, setList] = useState([])
   const [number, setNumber] = useState('')

   const onChange = (e) => setNumber(e.target.value)
   const onInsert = () => {
      const nextList = list.concat(parseInt(number)) //parseInt: 숫자형 중에서도 정수형
      setList(nextList)
      setNumber('')
   }

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

export default UseMemoEx2
