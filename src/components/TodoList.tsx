import { todoTypes } from "../types/todoTypes"
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos:todoTypes[];
  setCompletedTodos: (id:number, completed:boolean) => void;
  onDelete: (id:number) => void;
}


export default function TodoList({todos, setCompletedTodos, onDelete}: TodoListProps) {

  const sortedTodos = todos.sort((a,b) => {
    if(a.completed === b.completed){
      return b.id - a.id
    }
    return a.completed ? 1 : -1
  })

  return (
    <div className="space-y-2 p-5 border rounded-md border-gray-200">
      {sortedTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todos={todo}
          setCompletedTodos={setCompletedTodos}
          onDelete={onDelete}
        />
      ))}

      {todos.length <= 0 && (
        <p>Add more todos!</p>
      )}
    </div>
  )
}
