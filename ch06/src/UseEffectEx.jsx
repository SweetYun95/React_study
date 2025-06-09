import { useState, useEffect } from 'react'

function UseEffectEx() {
   const [name, setName] = useState('')
   const [nickName, setNickName] = useState('')

   // ❤ useEffect는 실행되는 시점을 아는게 중요
   // 1. 컴포넌트가 렌더링 될때마다 실행
   //    useEffect(() => {
   //       console.log('렌더링이 완료되었습니다')
   //       console.log({ name : name, nickName : nickName })
   //       키와 값의 변수명이 같으면 하나로 생략 가능
   //       console.log({ name, nickName })
   //    })

   // 2. 맨 처음 랜더링이 될때만 실행, 업데이트 시엔 실행되지 않음
   //    useEffect(() => {
   //       console.log('렌더링이 완료되었습니다')
   //       console.log({ name, nickName })
   //    }, [])

   // 3.  맨 처음 랜더링이 될때 실행 후 특정값이 변경될 때만 함수 호출
   //    useEffect(() => {
   //       console.log('렌더링이 완료되었습니다')
   //       console.log({ name, nickName })
   //    }, [name])

   // 4. 뒷정리 함수
   useEffect(() => {
      console.log('렌더링이 완료되었습니다')
      console.log({ name })

      return () => {
         console.log('컴포넌트가 리렌더링 되기전...')
         console.log(name)
      }
   }, [name])

   const onChangeName = (e) => setName(e.target.value)
   const onChangeNinkName = (e) => setNickName(e.target.value)

   return (
      <div>
         <div>
            <input type="text" value={name} onChange={onChangeName} />
         </div>
         <div>
            <input type="text" value={nickName} onChange={onChangeNinkName} />
         </div>
         <div>
            <div>
               <b>이름: </b>
               {name}
            </div>
            <div>
               <b>닉네임: </b>
               {nickName}
            </div>
         </div>
      </div>
   )
}

export default UseEffectEx
