import { Route, Routes, NavLink, useParams } from 'react-router-dom'
import './App.css'

function Home() {
   return (
      <div>
         <h2>Home</h2>
         Home...
      </div>
   )
}

var contents = [
   { id: 1, title: 'HTML', description: 'HTML is...' },
   { id: 2, title: 'JS', description: 'JS is...' },
   { id: 3, title: 'React', description: 'React is...' },
]



function Topic() {
   const params = useParams() // 경로 파라메터를 가지고 온다
   const topic_id = params.topic_id
   let selected_topic = {
      title: 'Sorry',
      description: 'Not Found',
   }

   // contents 배열에서 id가 같은 topic_id와 같은 데이터를 찾은 후 selected_topic에 넣어준다
   for (var i = 0; i < contents.length; i++) {
      if (contents[i].id === Number(topic_id)) {
         selected_topic = contents[i]
         break // 찾은 후 for문 탈출
      }
   }
  
   return (
      <div>
         <h3>{selected_topic.title}</h3>
         <p>{selected_topic.description}</p>
      </div>
   )
}



function Topics() {
   var lis = []
   for (var i = 0; i < contents.length; i++) {
      lis.push(
         <li key={contents[i].id}>
            <NavLink to={'/topics/' + contents[i].id}>{contents[i].title}</NavLink>
         </li>
      )
   }

   return (
      <div>
         <h2>Topics</h2>
         <ul>
            {lis}

            {/* 
         
            <li>
               <NavLink to="/topics/1">HTML</NavLink>
            </li>
            <li>
               <NavLink to="/topics/2">JS</NavLink>
            </li>
            <li>
               <NavLink to="/topics/3">React</NavLink>
            </li>
              */}
         </ul>
         {/* 주소의 경로에 따라 어떤 컴포넌트를 보여줄지 지정 */}
         <Routes>
            {/* <Route path="/1" element={'HTML is...'}></Route>
            <Route path="/2" element={'JS is...'}></Route>
            <Route path="/3" element={'React is...'}></Route> */}
            <Route path="/:topic_id" element={<Topic />} />
         </Routes>
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

function App() {
   return (
      <div>
         <h1>리액트 라우터</h1>
         <ul>
            <li>
               <NavLink to="/">Home</NavLink>
            </li>
            <li>
               <NavLink to="/topics">Topics</NavLink>
            </li>
            <li>
               <NavLink to="/contact">Contact</NavLink>
            </li>
         </ul>
         {/* 주소의 경로에 따라 어떤 컴포넌트를 보여줄지 지정 */}
         <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/topics/*" element={<Topics />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
         </Routes>
      </div>
   )
}

export default App
