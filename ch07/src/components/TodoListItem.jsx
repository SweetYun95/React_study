import './css/TodoListItem.css'
import { IoRemoveCircleOutline } from 'react-icons/io5'
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'
import classnames from 'classnames'

function TodoListItem({ todo, onRemove }) {
   const { id, text, checked } = todo
   return (
      <div className="TodoListItem">
         {/* classnames('checkbox',{checked} - true일때*/}
         {/* classnames('checkbox',{} - false일때 */}
         <div
            className={classnames('checkbox', { checked })}
            onClick={() => {
               ontoggle(id)
            }}
         >
            {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            <div className="text">{text}</div>
         </div>
         <div className="remove" onRemove={onRemove}>
            <IoRemoveCircleOutline />
         </div>
      </div>
   )
}

export default TodoListItem
