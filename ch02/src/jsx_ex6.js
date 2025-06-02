function App() {
   //  4. CSS 인라인 스타일 적용
   const name = '리액트'

   // json 객체로 지정, CSS 속성은 카멜표기법, 속성값은 문자열
   const style = {
      backgroundColor: 'red',
      color: 'black',
      fontSize: '48px',
      padding: 16, // 16px -> 단위 생략시 px로 지정
   }

   // return <div style={style}>{name}</div>
   // 혹은
   return (
      <div
         style={{
            backgroundColor: 'red',
            color: 'black',
            fontSize: '48px',
            padding: 16,
         }}
      >
         {name}
      </div>
   )
}

export default App

