import React, { Component, useState } from 'react'

function IterationSamlple3() {
   const [names, setNames] = useState([
      { id: 1, text: '눈사람' },
      { id: 2, text: '얼음' },
      { id: 3, text: '눈' },
      { id: 4, text: '바람' },
])

   const nameList = names.map((name) => <li key={name.id}>{name.text}</li>)
   console.log(nameList)


   return (
      <div>
         <ul>{nameList}</ul>
      </div>
   )
}

export default IterationSamlple3
