function App() {
   const name = '리액트'
   // 2. {} 중괄호 이용시 자바스크립트 표현식을 쓸 수 있다.
   // jsx 문법에선 if 대신 삼항연산자 주로 사용
   return (
      <>
         <h1>{name} 안녕!</h1>
         {name === '리액트' ? <h1>리액트입니다.</h1> : <h2>아닙니다.</h2>}
      </>
   )
   
}

export default App
