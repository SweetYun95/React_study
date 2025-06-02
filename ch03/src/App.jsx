// 리액트에서는 컴포넌트 함수명과 파일명을 똑같이 쓰고 대문자로 시작
// import 컴포넌트 함수명 from 파일명
import MyComponent from './MyComponent'
// import Type from './Type'

// function App() {} 혹은 화살표 함수 형태
// 1. props: 자식 컴포넌트에서 특정 속성을 이용해 속성값을 전달

const App = () => {
   return (
      <MyComponent name="승영" job="개발자" forNumber={4}>
         맑음
      </MyComponent>
   )
   // return (
   //    <Type
   //       str="react"
   //       num={200}
   //       bool={1 == 1}
   //       arr={[0, 1, 2]}
   //       json={{ react: '리액트', time: 2 }}
   //       func={(a, b) => {
   //          return a + b
   //       }}
   //    />
   // )
}

export default App
