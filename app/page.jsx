'use client'
import { Todos } from '@/components/Todos'
import React, { useState } from 'react'

import { Provider } from "react-redux";
import { store } from "./store";
import { AddTodo } from '@/components/AddTodo';

export default function page() {

 return (
  <Provider store={store}>
    <div>
      <h2>Welcome to React Redux-Toolkit</h2>
      <AddTodo/>
      <Todos />
    </div>
  </Provider>
  )
}
