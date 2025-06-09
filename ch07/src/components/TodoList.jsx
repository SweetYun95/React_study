import './css/TodoList.css'
import TodoListItem from './TodoListItem'

function TodoList({ todos }) {
 
   return (
      <div className="TodoList">
         {todos.map((todo) => (
            <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} />
         ))}
      </div>
   )
}

export default TodoList
