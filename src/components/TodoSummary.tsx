import { todoTypes } from "../types/todoTypes"

interface TodoSummaryProps {
  todos: todoTypes[];
  deleteCompletedTodos: () => void;
}

export default function TodoSummary({todos, deleteCompletedTodos}: TodoSummaryProps) {

  const completedTodos = todos.filter(todo => todo.completed);

  return (
    <div className="text-center">
      <p>
        {completedTodos.length} / {todos.length} todos have been completed
      </p>
      <button
        onClick={deleteCompletedTodos}
        className="text-red-500 cursor-pointer"
      >
        Delete all completed todos
      </button>
    </div>

  )
}
