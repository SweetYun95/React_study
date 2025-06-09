import React, { Component } from 'react'

function IterationSamlple2() {
   const names = ['눈사람', '얼음', '눈', '바람']
   const nameList = names.map((name, index) => <li key={index}>{name}</li>)
   console.log(nameList)

   // 리액트에서는 요소(태그, 컴포넌트)를 반복할때 반드시 요소를 구분하기 위한 key를 지정해야된다.->key는 중복x

   /*
<li key=0>눈사람</li>
<li key=1>얼음</li>
<li key=2>눈</li>
<li key=3>바람</li>
*/
   return (
      <div>
         <ul>{nameList}</ul>
      </div>
   )
}

export default IterationSamlple2
