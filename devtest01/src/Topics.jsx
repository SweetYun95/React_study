// Topics.jsx
import { NavLink, Routes, Route } from 'react-router-dom'
import Topic from './Topic'
import contents from './contents'

function Topics() {
   const lis = contents.map((item) => (
      <li key={item.id}>
         <NavLink to={`/topics/${item.id}`}>{item.title}</NavLink>
      </li>
   ))

   return (
      <div>
         <h2>Topics</h2>
         <ul>{lis}</ul>
         <Routes>
            <Route path=":topic_id" element={<Topic />} />
         </Routes>
      </div>
   )
}

export default Topics
