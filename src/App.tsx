import TodoList from "./components/TodoList"
import AddTodo from "./components/AddTodo";
import TodoSummary from "./components/TodoSummary";
import useTodos from "./hooks/useTodos";

function App() {

  const {
    todos,
    addTodo,
    setCompletedTodos,
    deleteTodo,
    deleteCompletedTodos
  } = useTodos();

  return (
    <>
      <div className="py-10 h-screen space-y-5">
        <h1 className="font-bold text-3xl text-center">Todo List</h1>
        <div className="p-5 max-w-lg mx-auto space-y-2">
          <AddTodo 
            onSubmit={addTodo}
          />

          <TodoList 
            todos={todos}
            setCompletedTodos={setCompletedTodos}
            onDelete={deleteTodo}
          />

          <TodoSummary 
            todos={todos}
            deleteCompletedTodos={deleteCompletedTodos}
          />
        </div>
      </div>
    </>
  )
}

export default App
