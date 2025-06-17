import './css/TodoList.css'
import TodoListItem from './TodoListItem'

function TodoList({ todos, onRemove, onToggle }) {
   /*
   todos = [
      {
         id: 1,
         text: '헬스장 가기',
         checked: true,
      },
      {
         id: 2,
         text: '점심약속',
         checked: true,
      },
      {
         id: 3,
         text: '리액트 복습',
         checked: false,
      },
   ]
   */
   return (
      <div className="TodoList">
         {todos.map((todo) => (
            <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
         ))}
      </div>
   )
}

export default TodoList
