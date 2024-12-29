'use client'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '@/app/features/todoSlice';

export const Todos = () => {
    const todos= useSelector(state=>state.todos)
    const dispatch=useDispatch()
  return (
    <div>
        {todos.map(todo=>(
            <div key={todo.id}>
                {todo.text}
                <button onClick={()=>dispatch(removeTodo(todo.id))}>Remove</button>
            </div>
        ))}
    </div>
  )
}
