import React, { Component } from 'react';


function IterationSamlple() {
   const names = ['눈사람', '얼음', '눈', '바람']
   const nameList = names.map((name) => <li>{name}</li>)
   console.log(nameList)

   /*
<li>눈사람</li>
<li>얼음</li>
<li>눈</li>
<li>바람</li>
*/
   return (
      <div>
         <ul>{nameList}</ul>
      </div>
   )
}

export default IterationSamlple;