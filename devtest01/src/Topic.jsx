// Topic.jsx
import { useParams } from 'react-router-dom'
import contents from './contents'

function Topic() {
   const params = useParams()
   const topic_id = params.topic_id
   let selected_topic = {
      title: 'Sorry',
      description: 'Not Found',
   }

   for (let i = 0; i < contents.length; i++) {
      if (contents[i].id === Number(topic_id)) {
         selected_topic = contents[i]
         break
      }
   }

   return (
      <div>
         <h3>{selected_topic.title}</h3>
         <p>{selected_topic.description}</p>
      </div>
   )
}

export default Topic
