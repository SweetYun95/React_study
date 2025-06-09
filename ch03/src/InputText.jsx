import { useState } from 'react'

function InputText() {
   const [text, setText] = useState('')

   return (
      <div>
         <input
            type="text"
            value={text}
               onClick={(e) => {
                // e.target.value: input창에 입력한 값
               setText(e.target.value)
            }}
           />
           <p>입력한 값:{text}</p>
      </div>
   )
}

export default InputText
