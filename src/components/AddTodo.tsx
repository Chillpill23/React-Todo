import { useState } from "react";

interface AddTodoProps {
  onSubmit:(title:string) => void;
}

export default function AddTodo({onSubmit}: AddTodoProps) {

  const [input, setInput] = useState("")
  const [emptyTodo, setEmptyTodo] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!input.trim()){
      setEmptyTodo(true)
      return;
    }

    onSubmit(input)
    setInput("")
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex py-2">
        <input 
          placeholder="Add new todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="grow rounded-s-md p-2 border border-gray-400"
        />
        <button 
          type="submit"
          className=" bg-slate-800 text-white rounded-e-md p-2 w-16 hover:bg-slate-500 cursor-pointer transition-all"
        >
          Add
        </button>
      </form>
      {emptyTodo && <p className="p-2 text-red-500">Please add a todo before clicking the add button</p>}
    </>
  )
}
