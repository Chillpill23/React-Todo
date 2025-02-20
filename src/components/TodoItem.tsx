import { todoTypes } from "../types/todoTypes"

interface TodoItemProps {
  todos: todoTypes;
  setCompletedTodos:(id:number, completed:boolean) => void;
  onDelete:(id:number) => void;
}

export default function TodoItem({todos,setCompletedTodos,onDelete}: TodoItemProps) {
  return (
    <div className="flex items-center gap-3">
      <label className="flex grow items-center gap-3 border rounded-md border-gray-300 p-2">
        <input 
          type="checkbox"
          checked={todos.completed}
          onChange={(e) => {setCompletedTodos(todos.id, e.target.checked)}}
        />
        <p>{todos.title}</p>
      </label>
      <button onClick={() => onDelete(todos.id)}>Delete</button>
    </div>
  )
}
