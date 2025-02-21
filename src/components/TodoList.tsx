import { todoTypes } from "../types/todoTypes"
import TodoItem from "./TodoItem"

interface TodoListProps {
  todos: todoTypes[];
  toggleChecked: (id:number, completed:boolean) => void;
  deleteTodo: (id:number) => void;
}

export default function TodoList({todos, toggleChecked,deleteTodo}: TodoListProps) {

  const sortedTodos = todos.sort((a,b) => {
    if(a.completed === b.completed){
      return b.id - a.id;
    }

    return a.completed ? 1 : -1
  })

  return (
    <div className="border-1 border-slate-300 bg-blue-50 rounded-md p-4 space-y-2">
      {sortedTodos.map((todo) => (
        <TodoItem 
          key={todo.id}
          todo={todo}
          toggleChecked={toggleChecked}
          deleteTodo={deleteTodo}
        />
      ))}

      {sortedTodos.length <= 0 ? <p>Congratulations, all todos have been accomplished</p> : ""}
    </div>
  )
}
