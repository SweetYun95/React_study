import { Route, Routes, NavLink } from 'react-router-dom'
import './App.css'

function Home() {
   return (
      <div>
         <h2>Home</h2>
         Home...
      </div>
   )
}

function Topics() {
   return (
      <div>
         <h2>Topics</h2>
         Topics...
      </div>
   )
}

function Contact() {
   return (
      <div>
         <h2>Contact</h2>
         Contact...
      </div>
   )
}
/*
a태그로 링크 이동시 페이지가 전체 새로고침되면서 모든 DOM들이 다시 렌더링이 된다. -> MPA 방식
<Link> 컴포넌트로 이동시 바뀐부분의 DOM만 리렌더링이 된다.
  -> SPA 방식
  -> 리액트는 기본적으로 SPA 방식으로 동작함
*/
function App() {
   return (
      <div>
         <h1>리액트 라우터</h1>
         <ul>
            <li>
               {/* <Link to="/">Home</Link> */}
               <NavLink to="/">Home</NavLink>
            </li>
            <li>
               {/* <Link to="/topics">Topics</Link> */}
               <NavLink to="/topics">Topics</NavLink>
            </li>
            <li>
               {/* <Link to="/contact">Contact</Link> */}
               <NavLink to="/contact">Contact</NavLink>
            </li>
         </ul>
         {/* 주소의 경로에 따라 어떤 컴포넌트를 보여줄지 지정 */}
         <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/topics" element={<Topics />}></Route>
            <Route path="/contact" element={<Contact />}></Route>

            {/* 지정한 경로 외에 다른 경로는 모두 Not Found */}
            <Route path="/*" element={'Not Found'}></Route>
         </Routes>
      </div>
   )
}

export default App
