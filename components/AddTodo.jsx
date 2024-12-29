'use client'
import React,{useState} from 'react'
import { addTodo } from '@/app/features/todoSlice'
import { useDispatch } from 'react-redux'

export const AddTodo = () => {

    const [input, setInput] = useState('')
    const dispatch= useDispatch();

    const addTodoHandler=(e)=>{
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    }

  return (
    <form action="" onSubmit={addTodoHandler}>
      <input type="text" onChange={(e)=>setInput(e.target.value)} />
      <button type='submit'>ADD</button>
    </form>
  )
}
