import { useEffect, useState } from 'react'
import { todoTypes } from '../types/todoTypes';
import { todoData } from '../data/todoData';

export default function useTodos() {

  const [todos, setTodos] = useState(() => {
    const savedTodos: todoTypes[] = JSON.parse(localStorage.getItem("todos") || '[]');

    return savedTodos.length > 0 ? savedTodos : todoData;
  })

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const toggleCheck = (id:number, completed:boolean) => {
    setTodos(prevTodos => prevTodos.map(todo => todo.id === id ? {...todo, completed} :  todo ))
  }

  const addTodo = (title:string) => {
    setTodos(prevTodos => [
      {
        id: Date.now(),
        title: title,
        completed:false,
      },
      ...prevTodos
    ])
  }

  const deleteTodo = (id:number) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id)
    )
  }

  const deleteCompletedTodos = () => {
    setTodos(prevTodos => prevTodos.filter(todo => !todo.completed))
  }


  return {
    todos,
    toggleCheck,
    addTodo,
    deleteTodo,
    deleteCompletedTodos,
  }
}
