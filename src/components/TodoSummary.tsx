import { todoTypes } from "../types/todoTypes"

interface TodoSummaryProps{
  todos: todoTypes[];
  deleteCompletedTodos: () => void;
}

export default function TodoSummary({todos, deleteCompletedTodos}: TodoSummaryProps) {

  const completedTodos = todos.filter(todo => todo.completed)

  return (
    <div className="text-center">
      <p className="text-slate-500 py-3">{completedTodos.length}/{todos.length} todos have been completed</p>
      
      {completedTodos.length > 0 && (
        <button
          className="cursor-pointer hover:text-red-400 transition-all"
          onClick={deleteCompletedTodos}
        >
          Delete all completed Todos
        </button>
      )}

    </div>
  )
}
