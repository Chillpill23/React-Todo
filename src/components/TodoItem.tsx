import { todoTypes } from "../types/todoTypes"
import { Trash2 } from "lucide-react";

interface TodoItemProps {
  todo: todoTypes;
  toggleChecked: (id:number, completed:boolean) => void;
  deleteTodo: (id:number) => void;
}

export default function TodoItem({todo,toggleChecked, deleteTodo}: TodoItemProps) {
  return (
    <div className="flex gap-3">
      <label className="flex border-2 border-gray-300 bg-white p-2 rounded-md gap-3 grow">
        <input 
          type="checkbox" 
          checked={todo.completed}
          onChange={(e) => {toggleChecked(todo.id, e.target.checked)}}
        />
        <p className={todo.completed ? 'line-through text-slate-400': ''}>{todo.title}</p>
      </label>
      <button
        className="cursor-pointer p-1"
        onClick={() => deleteTodo(todo.id)}
      >
        <Trash2 className='text-slate-500 hover:text-slate-800 transition-all' size={20}/>
      </button>
    </div>
  )
}
