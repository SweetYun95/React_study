function App() {
   const name = undefined // false
   return (
      //3. ||연산: ||앞이 false 면 뒤에 내용 출력
      <>{name || <h1>리액트입니다.</h1>}</>
   )
}

export default App
