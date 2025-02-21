
import TodoList from "./components/TodoList"
import AddTodo from "./components/AddTodo"
import TodoSummary from "./components/TodoSummary"
import useTodos from "./hook/useTodos"


function App() {

  const {
    todos,
    toggleCheck,
    addTodo,
    deleteTodo,
    deleteCompletedTodos,
  } = useTodos();

  return (
    <div className="space-y-2 p-5 h-screen">
      <div className="p-5 text-center max-w-lg mx-auto">
        <h1 className="text-2xl font-medium p-3">Todo List</h1>
        <div>
          <AddTodo 
            onSubmit={addTodo}
          />
          <TodoList 
            todos={todos}
            toggleChecked={toggleCheck}
            deleteTodo={deleteTodo}
          />

          <TodoSummary
            todos={todos}
            deleteCompletedTodos={deleteCompletedTodos}
          />
        </div>
      </div>
    </div>
  )
}

export default App
