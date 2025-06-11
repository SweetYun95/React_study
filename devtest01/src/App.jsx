// App.jsx
import './App.css'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './Home'
import Topics from './Topics'
import Contact from './Contact'

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

         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topics/*" element={<Topics />} />
            <Route path="/contact" element={<Contact />} />
         </Routes>
      </div>
   )
}

export default App
