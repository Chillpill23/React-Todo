import { useState } from "react";

interface AddTodoProps {
  onSubmit: (title:string) => void;
}

export default function AddTodo({onSubmit}: AddTodoProps) {

  const [input, setInput] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!input.trim()) return;

    onSubmit(input);
    setInput("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input 
        className="rounded-s-md p-2 grow border border-gray-400" 
        placeholder="Add Todo item"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type='submit' className="w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-600">Add</button>
    </form>
  )
}
